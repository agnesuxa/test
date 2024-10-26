// script.js

const allEpisodes = [
  { name: "Episode 1: Bătaie cu Bunica Turbo", img: "https://anibox.lol/wp-content/uploads/2024/10/eTbwdeKsf7MV3Lj73F1VRQHfx80-2.jpg", url: "https://anibox.lol/watch/dandadan-episoade-4/" },
  { name: "Episode 2: Asasinul și Ninja-ul", img: "https://anibox.lol/wp-content/uploads/2024/10/97NloZcN94eEMjCqdgtLwWwMs5-2.jpg", url: "https://anibox.lol/watch/blue-lock-vs-u-20-japan-episoade-26/" },
  { name: "Episode 3: Festivalul Sanctuarului Amagami ~Conexiuni~ ", img: "https://anibox.lol/wp-content/uploads/2024/10/rWsVdKauv99X3CevDLCIgS71GiT-1.jpg", url: "https://anibox.lol/watch/amagami-san-chi-no-enmusubi-episoade-4/" },
  { name: "Episode 4: Răufăcătoarea și Câmpul de Flori", img: "https://anibox.lol/wp-content/uploads/2024/10/u74UjSS69QikgtQ0GCeYXzGr7rq-1.jpg", url: "https://anibox.lol/watch/rekishi-ni-nokoru-akujo-ni-naru-zo-episoade-4/" },
  { name: "Episode 5: Episodul 4", img: "https://anibox.lol/wp-content/uploads/2024/10/me5QUo9p1iP3fa6d0hMR8XTqUJ9-2-scaled.jpg", url: "https://anibox.lol/watch/uzumaki-episoade-4/" },
  { name: "Episode 6: O scuză nu va fi suficientă", img: "https://anibox.lol/wp-content/uploads/2024/10/43HWZJ7tXSsaZZDZofAS1KZJJZW-3.jpg", url: "https://anibox.lol/watch/saikyou-no-shienshoku-wajutsushi-de-aru-ore-wa-sekai-saikyou-clan-wo-shitagaeru-episoade-4/" },
  { name: "Episode 7: Masca misterioasă vrea să lupte", img: "https://anibox.lol/wp-content/uploads/2024/10/zHtApWbMP7U5gFgYxtUtVWN6lyR-2.jpg", url: "https://anibox.lol/watch/nageki-no-bourei-wa-intai-shitai-episoade-4/" },
  { name: "Episode 8: În drum spre oraș", img: "https://anibox.lol/wp-content/uploads/2024/10/z0So3ih6jgnrLqJeLLEA72LaT9l-1.jpg", url: "https://anibox.lol/watch/hitoribocchi-no-isekai-kouryaku-episoade-4/" },
  { name: "Episode 9: Este o confruntare Bunică vs. Bunică!", img: "https://anibox.lol/wp-content/uploads/2024/10/mM7WAhNZyXO0axLZ0FGhNIwY5Xv-2.jpg", url: "https://anibox.lol/watch/dandadan-episoade-3/" },
  { name: "Episode 10: O întâlnire cu zeii", img: "https://anibox.lol/wp-content/uploads/2024/10/zylq3FNjQxziseJBvhyKzutGc2f-2.jpg", url: "https://anibox.lol/watch/amagami-san-chi-no-enmusubi-episoade-3/" },
  // Add more episodes here
];

function getRandomEpisodes(num) {
  return [...allEpisodes].sort(() => 0.5 - Math.random()).slice(0, num);
}

document.getElementById("rouletteButton").addEventListener("click", openRoulette);

function openRoulette() {
    document.getElementById("roulettePopup").style.display = "block";
}

document.getElementById("spinButton").onclick = function() {
  const wheel = document.querySelector(".wheel");
  const randomRotation = Math.floor(Math.random() * 360) + 1080;
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${randomRotation}deg)`;

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
    wheel.style.transition = "none"; // Reset after spin
    showRandomEpisode();
  }, 4000);
};

function showRandomEpisode() {
  const selectedEpisode = getRandomEpisodes(1)[0];
  showEpisodeNotification(selectedEpisode);
}

  episodeName.textContent = episode.name;
  episodeImage.src = episode.img;
  episodeImage.onclick = () => window.location.href = episode.url;

  notification.style.display = "block";
}

document.getElementById("episodeNotification").onclick = function() {
  this.style.display = "none";
};
