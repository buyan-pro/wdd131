// Product Dataset
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // -----------------------------------------------------------------
    // 1. GLOBAL FOOTER LOGIC (Runs on both pages)
    // -----------------------------------------------------------------
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // -----------------------------------------------------------------
    // 2. MAIN FORM LOGIC (Runs ONLY on form.html)
    // -----------------------------------------------------------------
    const productSelect = document.getElementById("product-select");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            
            // Capitalizes each word neatly for display purposes
            const capitalizedName = product.name
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            option.textContent = capitalizedName;
            productSelect.appendChild(option);
        });
    }


    // -----------------------------------------------------------------
    // 3. REVIEW COUNTER LOGIC (Runs ONLY on review.html)
    // -----------------------------------------------------------------
    const countDisplay = document.getElementById("review-counter-display");

    if (countDisplay) {
        // Fetch current localStorage count records or fallback to 0
        let reviewCount = localStorage.getItem("reviewCountNumber");
        if (!reviewCount) {
            reviewCount = 0;
        }
        
        // Process calculation operations and write data updates back
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCountNumber", reviewCount);

        // Inject the numeric string text safely inside the display span item
        countDisplay.textContent = reviewCount;
    }
});
