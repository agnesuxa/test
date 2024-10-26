document.getElementById("openRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "flex";
};

document.getElementById("closeRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "none";
};

document.getElementById("spinButton").onclick = function() {
  const wheel = document.querySelector(".wheel");
  const randomRotation = Math.floor(Math.random() * 3600) + 720; // Adds at least 2 full rotations

  wheel.style.transform = `rotate(${randomRotation}deg)`;

 
  setTimeout(() => {
    alert("Congratulations! You've won a prize!");
  }, 4000); // Adjust based on CSS transition time
};
