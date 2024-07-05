// Function to check if an element has no properties
function hasNoProperties(element) {
  return element.tagName === 'DIV' && element.attributes.length === 0;
}

// Function to find the parent div without any properties
function findParentDivWithoutProperties(element) {
  if (!element || element.tagName === 'HTML') {
      return null; // Stop recursion at the top of the document
  }

  if (hasNoProperties(element)) {
      return element; // Found the div with no properties
  }

  // Recursively search parent elements
  return findParentDivWithoutProperties(element.parentElement);
}

// Function to hide the targeted divs
function hideFirstThreeTargetedDivs() {
  // Find all canvas elements with height equal to 21.25
  const canvas = document.querySelector('canvas[height="21.25"]');

  // Counter to keep track of how many ads have been hidden
  let hiddenAdsCount = 0;

  // Iterate over all matching canvas elements

          // Find the parent div without any properties
          const parentDivWithoutProperties = findParentDivWithoutProperties(canvas.parentElement);

          // If found, hide the div element
          if (parentDivWithoutProperties) {
              parentDivWithoutProperties.style.display = 'none';
              console.log('Sponsored post hidden');
              hiddenAdsCount++; // Increment the counter
          }

}

// Sleep function to delay execution
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to run the script after a delay
async function runScript() {
  // Sleep for 10 seconds to load all the contents
  await sleep(3500);

  // Run the function to hide the first three targeted divs
  hideFirstThreeTargetedDivs();
  
  await sleep(5500);

  hideFirstThreeTargetedDivs();
}

// Start the script
runScript();
