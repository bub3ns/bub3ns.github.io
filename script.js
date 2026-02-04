function playAudioAndVideo() {
    var audio = document.getElementById('audio');
    var video = document.getElementById('video');
    video.volume = 0;
    audio.volume = 0.3;

    if (audio && video) {
        setTimeout(function () {
            audio.play();
        }, 50);
        video.play();
    }
}

let titleText = "bub3ns.xyz   ";
let titleArray = titleText.split("");
let titleInterval = null;
let started = false;

function startTitleAnimation() {
    if (started) return; // zeby nie odpalic 2x
    started = true;

    document.title = titleText;

    titleInterval = setInterval(() => {
        const first = titleArray.shift(); // zabierz pierwszą literke
        titleArray.push(first);           // wjeb ja na koniec
        document.title = titleArray.join("");
    }, 500);
}
