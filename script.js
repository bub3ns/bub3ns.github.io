function playAudioAndVideo() {
    const audio = document.getElementById('audio');
    const video = document.getElementById('video');

    if (!audio || !video) return;

    // set volume before play()
    audio.volume = 0.3;
    video.volume = 0;

    audio.play().catch(() => {});
    video.play().catch(() => {});
}

let titleText = "bub3ns.xyz   ";
let titleArray = titleText.split("");
let titleInterval = null;
let started = false;

function startTitleAnimation() {
    if (started) return;
    started = true;

    document.title = titleText;

    // moving effect
    titleInterval = setInterval(() => {
        const first = titleArray.shift();
        titleArray.push(first);
        document.title = titleArray.join("");
    }, 500);
}
