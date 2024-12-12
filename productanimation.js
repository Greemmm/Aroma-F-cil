// Function to check if an element is in view and apply flip and opacity
function checkVisibility() {
    const boxes = document.querySelectorAll('.box');
    const windowHeight = window.innerHeight;

    boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const boxTop = rect.top;  // The top of the box relative to the viewport
        const boxHeight = rect.height;

        // IT FLIPS THE PRODUCT BRUH WHEN ITS SCROLLED TO THE PRODUCT
        if (boxTop < windowHeight && boxTop + boxHeight > 0) {
            const opacity = 1 - (boxTop / windowHeight); // Fade in as you scroll
            box.style.opacity = Math.min(opacity, 1); // Ensure opacity does not exceed 1

            // Gradually rotate the box from -90deg to 0deg
            const rotateValue = Math.max(-90 + (boxTop / 5), -90); // Gradually rotate the box
            box.style.transform = `rotateY(${rotateValue}deg)`;
            
            // If the box is fully in the viewport, apply the final transformation
            if (boxTop + boxHeight <= windowHeight) {
                box.style.opacity = 1;
                box.style.transform = 'rotateY(0deg)';
            }
        } else {
            // Keep the element hidden when out of view
            box.style.opacity = 0;
            box.style.transform = 'rotateY(-90deg)'; // Keep it off-screen and hidden
        }
    });
}

// Listen for scroll events to update the opacity and flip
window.addEventListener('scroll', checkVisibility);

// Also check visibility on page load to handle already in-view elements
document.addEventListener('DOMContentLoaded', checkVisibility);
