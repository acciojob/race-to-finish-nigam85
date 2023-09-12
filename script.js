window.promises = [];

// Function to generate a random delay between 1 and 5 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

// Array of promises that resolve with random delays
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved!"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved!"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved!"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved!"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved!"), getRandomDelay())),
];

// Using Promise.any() to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise1");
    }, Math.floor(Math.random() * 5000) + 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise2");
    }, Math.floor(Math.random() * 5000) + 1000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise3");
    }, Math.floor(Math.random() * 5000) + 1000);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise4");
    }, Math.floor(Math.random() * 5000) + 1000);
});

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise5");
    }, Math.floor(Math.random() * 5000) + 1000);
});

const myArray = [promise1, promise2, promise3, promise4, promise5];

Promise.any(myArray).then((result) => {
    document.getElementById("output").innerText = result;
});

// Do not change the code above this
// add your promises to the array `promises`
