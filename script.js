window.promises = [
	new Promise(resolve => setTimeout(() => resolve('Promise 1'), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve('Promise 2'), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve('Promise 3'), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve('Promise 4'), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve('Promise 5'), getRandomTime()))

];

// Do not change the code above this
// add your promises to the array `promises`

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Helper function to generate random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}