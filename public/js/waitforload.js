// Get the page wrapper element
const pageWrapper = document.getElementById('page-wrapper');
// Get the loading spinner element
const loadingSpinner = document.querySelector('.spinner-wrapper');

// Function to show the page content with a fade-in effect
const showPageContent = () => {
  // Remove the loading spinner
  loadingSpinner.style.display = 'none';

  // Set the opacity to 1 to show the page content
  pageWrapper.style.opacity = '1';
  console.log('Page content displayed');
};

// Hide the page content initially
pageWrapper.style.opacity = '0';

// Add load event listeners to images
const images = document.querySelectorAll('img');
let loadedImages = 0;

const imageLoaded = () => {
  loadedImages++;
  console.log(`Image loaded (${loadedImages}/${images.length})`);
  if (loadedImages === images.length) {
    // All images have finished loading
    showPageContent();
  }
};

// Check if images are already loaded
if (images.length > 0) {
  images.forEach((image) => {
    if (image.complete) {
      imageLoaded();
    } else {
      image.addEventListener('load', imageLoaded);
    }
  });
} else {
  // No images on the page
  showPageContent();
}

console.log('JavaScript code executed');
