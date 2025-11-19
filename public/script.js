class EventDetails {
    constructor(title, basePrice, discountRate) {
        this.title = title;
        this.basePrice = basePrice;
        this.discountRate = discountRate;
    }

    calculateDiscountedPrice() {
        return this.basePrice * (1 - this.discountRate);
    }

    updatePriceDisplay(elementId) {
        const bookNowButton = document.getElementById(elementId);
        if (bookNowButton) {
            const discountedPrice = this.calculateDiscountedPrice();
            
            const formattedPrice = discountedPrice.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0
            });
            
            bookNowButton.innerHTML = `**Book Now! &nbsp; Save ${this.discountRate * 100}%!** From ${formattedPrice}`;
            
            bookNowButton.style.backgroundColor = '#1a9d47'; 
        }
    }
}


const electricDreamsEvent = new EventDetails(
    "Electric Dreams Festival", 
    11999, 
    0.10 
);


document.addEventListener('DOMContentLoaded', () => {
    electricDreamsEvent.updatePriceDisplay('book-now-btn-id');
});

console.log(`Original Price: ₹${electricDreamsEvent.basePrice}`);
console.log(`Discounted Price: ₹${electricDreamsEvent.calculateDiscountedPrice()}`);