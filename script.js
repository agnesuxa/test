const allEpisodes = [
  { name: "Episode 1", img: "image1.jpg", url: "#1" },
  { name: "Episode 2", img: "image2.jpg", url: "#2" },
  // Add additional episodes as needed
];

function getRandomEpisodes(num) {
  return [...allEpisodes].sort(() => 0.5 - Math.random()).slice(0, num);
}

document.getElementById("openRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "flex";
  const episodeWheel = document.getElementById("episodeWheel");
  episodeWheel.innerHTML = ""; 

  getRandomEpisodes(10).forEach(episode => {
    const slice = document.createElement("div");
    slice.classList.add("slice");
    slice.innerText = episode.name;
    episodeWheel.appendChild(slice);
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
    const selectedEpisode = getRandomEpisodes(1)[0];
    showEpisodeNotification(selectedEpisode);
  }, 4000);
};

function showEpisodeNotification(episode) {
  const notification = document.getElementById("episodeNotification");
  document.getElementById("episodeName").textContent = episode.name;
  const episodeImage = document.getElementById("episodeImage");
  episodeImage.src = episode.img;
  episodeImage.onclick = () => window.location.href = episode.url;

  notification.style.display = "block";
}

document.getElementById("episodeNotification").onclick = function() {
  this.style.display = "none";
};
