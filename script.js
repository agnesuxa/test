document.addEventListener('DOMContentLoaded', () => {
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
];

    const openButton = document.getElementById('open-roulette');
    const closeButton = document.getElementById('close-roulette');
    const overlay = document.getElementById('roulette-overlay');
    const spinner = document.getElementById('spinner');
    const episodeNotification = document.getElementById('episode-notification');
    const episodeTitle = document.getElementById('episode-title');
    const episodeImage = document.getElementById('episode-image');
    const episodeLink = document.getElementById('episode-link');

    openButton.addEventListener('click', () => {
        console.log("Open button clicked");
        overlay.classList.add('visible');
        spinWheel();
    });

    closeButton.addEventListener('click', () => {
        console.log("Close button clicked");
        overlay.classList.remove('visible');
        resetWheel();
    });

    function spinWheel() {
        const randomIndex = Math.floor(Math.random() * episodes.length);
        const selectedEpisode = episodes[randomIndex];

        const spinDuration = 4000; // 4 seconds
        const randomRotation = Math.floor(360 * 5 + Math.random() * 360); // Spin 5 full rotations plus random
        spinner.style.transform = `rotate(${randomRotation}deg)`;

        setTimeout(() => {
            displayEpisode(selectedEpisode);
        }, spinDuration);
    }

    function displayEpisode(episode) {
        episodeTitle.innerText = episode.title;
        episodeImage.src = episode.image;
        episodeLink.href = episode.link;
        episodeNotification.classList.remove('hidden');
    }

    function resetWheel() {
        spinner.style.transform = 'rotate(0deg)';
        episodeNotification.classList.add('hidden');
    }
});
