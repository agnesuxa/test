// script.js

const allEpisodes = [
  { name: "Episode 1: Haunted Tales", img: "https://anibox.lol/images/episode1.jpg", url: "https://anibox.lol/episode/1" },
  { name: "Episode 2: Witch’s Curse", img: "https://anibox.lol/images/episode2.jpg", url: "https://anibox.lol/episode/2" },
  { name: "Episode 3: Vampire’s Night", img: "https://anibox.lol/images/episode3.jpg", url: "https://anibox.lol/episode/3" },
  { name: "Episode 4: Ghostly Encounters", img: "https://anibox.lol/images/episode4.jpg", url: "https://anibox.lol/episode/4" },
  { name: "Episode 5: Dark Forest", img: "https://anibox.lol/images/episode5.jpg", url: "https://anibox.lol/episode/5" },
  { name: "Episode 6: Demon’s Wrath", img: "https://anibox.lol/images/episode6.jpg", url: "https://anibox.lol/episode/6" },
  { name: "Episode 7: Sorcerer’s Secrets", img: "https://anibox.lol/images/episode7.jpg", url: "https://anibox.lol/episode/7" },
  { name: "Episode 8: Midnight Horror", img: "https://anibox.lol/images/episode8.jpg", url: "https://anibox.lol/episode/8" },
  { name: "Episode 9: Spellbound", img: "https://anibox.lol/images/episode9.jpg", url: "https://anibox.lol/episode/9" },
  { name: "Episode 10: Cursed Village", img: "https://anibox.lol/images/episode10.jpg", url: "https://anibox.lol/episode/10" },
  // Add more episodes here
];

function getRandomEpisodes(num) {
  return [...allEpisodes].sort(() => 0.5 - Math.random()).slice(0, num);
}

document.getElementById("openRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "flex";
  const episodeWheel = document.getElementById("episodeWheel");
  episodeWheel.innerHTML = ""; 

  const episodes = getRandomEpisodes(10);
  episodes.forEach((episode, index) => {
    const slice = document.createElement("div");
    slice.classList.add("slice");
    slice.innerText = episode.name;
    slice.style.transform = `rotate(${index * 36}deg) translateY(-150px)`;
    episodeWheel.appendChild(slice);
    slice.dataset.image = episode.img;
    slice.dataset.url = episode.url;
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
  const episodeName = document.getElementById("episodeName");
  const episodeImage = document.getElementById("episodeImage");

  episodeName.textContent = episode.name;
  episodeImage.src = episode.img;
  episodeImage.onclick = () => window.location.href = episode.url;

  notification.style.display = "block";
}

document.getElementById("episodeNotification").onclick = function() {
  this.style.display = "none";
};
