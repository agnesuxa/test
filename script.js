// script.js

// Display the pop-up when the button is clicked
document.getElementById("openRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "flex";
};

// Hide the pop-up when the close button is clicked
document.getElementById("closeRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "none";
};

// Spin the roulette wheel and stop at a random angle
document.getElementById("spinButton").onclick = function() {
  const wheel = document.querySelector(".wheel");
  const randomRotation = Math.floor(Math.random() * 3600) + 720; // Adds at least 2 full rotations

  // Apply the random rotation
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  // Show an alert with the result after the spin animation ends
  setTimeout(() => {
    alert("Congratulations! You've won a prize!");
  }, 4000); // Adjust based on CSS transition time
};
