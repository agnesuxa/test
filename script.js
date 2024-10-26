// Sample episode data
const allEpisodes = ["Episode 1", "Episode 2", "Episode 3", "Episode 4", "Episode 5", "Episode 6", "Episode 7", "Episode 8", "Episode 9", "Episode 10", "Episode 11", "Episode 12", "Episode 13", "Episode 14", "Episode 15"];

function getRandomEpisodes(num) {
  const shuffled = [...allEpisodes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

document.getElementById("openRoulette").onclick = function() {
  const roulettePopUp = document.getElementById("roulettePopUp");
  roulettePopUp.style.display = "flex";

  const episodeWheel = document.getElementById("episodeWheel");
  episodeWheel.innerHTML = ""; // Clear previous items

  // Add 10 random episodes to the wheel
  getRandomEpisodes(10).forEach(episode => {
    const episodeDiv = document.createElement("div");
    episodeDiv.classList.add("slice");
    episodeDiv.innerText = episode;
    episodeWheel.appendChild(episodeDiv);
  });
};

document.getElementById("closeRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "none";
};

document.getElementById("spinButton").onclick = function() {
  const wheel = document.querySelector(".wheel");
  const randomRotation = Math.floor(Math.random() * 3600) + 720;
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  setTimeout(() => {
    alert("You landed on a random episode!");
  }, 4000);
};
