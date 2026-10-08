const playlist = [
        {
    title: "SURVIVOR",
            artist: "Lies of P",
            src: "songs/SURVIVOR.mp3",
            art: "images/lies_of_p.jpg"
        },
    {
            title: "Une vie à t'aimer",
            artist: "Lorien Testard",
            src: "songs/Une vie à t'aimer.mp3",
            art: "images/clair_obscur.jpg"
    },
    {
            title: "Throw Away Your Mask",
            artist: "Lyn",
            src: "songs/Throw Away Your Mask.mp3",
            art: "images/persona_5_R.jpg"
    },
    {
            title: "Hero's Awakening",
            artist: "ATLUS Sound Team",
            src: "songs/Hero's Awakening.mp3",
            art: "images/metaphor.jpg"
    }
];

const audioPlayer = document.getElementById("audioPlayer");
const songTitleText = document.getElementById("songTitle");
const artistNameText = document.getElementById("artistName");
const albumArtImg = document.getElementById("albumArt");
const shuffleBtn = document.getElementById("shuffleBtn");

let lastPlayedIndex = -1;

function playRandomSong() {
    do {randomIndex = Math.floor(Math.random() * playlist.length);} while (randomIndex === lastPlayedIndex && playlist.length > 1);
    const currentTrack = playlist[randomIndex];
    lastPlayedIndex = randomIndex;

    audioPlayer.load(); 
    audioPlayer.currentTime = 0;

    audioPlayer.src = currentTrack.src;
    songTitleText.textContent = currentTrack.title;
    artistNameText.textContent = currentTrack.artist;
    albumArtImg.src = currentTrack.art;
    albumArtImg.alt = `${currentTrack.title} by ${currentTrack.artist}`;

    audioPlayer.play().catch(error => {
        console.log("Playback interaction required. Click 'Shuffle Next' to begin.");
    });
}

shuffleBtn.addEventListener("click", playRandomSong);
audioPlayer.addEventListener("ended", playRandomSong);