const magnetic = document.querySelector('.hover');
const strength = 25;

function playAudioAndVideo() {
    const audio = document.getElementById('audio');
    const video = document.getElementById('video');

    if (!audio || !video) return;
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

    titleInterval = setInterval(() => {
        const first = titleArray.shift();
        titleArray.push(first);
        document.title = titleArray.join("");
    }, 500);
}

magnetic.addEventListener('mousemove', (e) => {
    const rect = magnetic.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const moveX = (deltaX / rect.width) * strength;
    const moveY = (deltaY / rect.height) * strength;

    magnetic.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.15)`;
});

magnetic.addEventListener('mouseleave', () => {
    magnetic.style.transform = 'translate(0px, 0px) scale(1)';
});

underline.addEventListener('mouseenter', () => {
    hoveringUnderline = true;
});

/* ===== cinematic underline animation ===== */

const underline = document.querySelector('.underline-hover');

let hoverStart = null;
let raf = null;
let drawing = false;
let erasing = false;

const DRAW_SPEED = 0.18;   // % per ms
const ERASE_SPEED = 0.25;

let width = 0;
let left = 0;

function draw(ts) {
    if (!hoverStart) hoverStart = ts;

    width = Math.min(width + DRAW_SPEED * 16, 100);

    underline.style.setProperty('--uw', `${width}%`);

    if (drawing && width < 100) {
        raf = requestAnimationFrame(draw);
    }
}

function erase() {
    left += ERASE_SPEED * 16;
    width -= ERASE_SPEED * 16;

    if (width <= 0) {
        width = 0;
        left = 0;
    }

    underline.style.setProperty('--ul', `${left}%`);
    underline.style.setProperty('--uw', `${Math.max(width, 0)}%`);

    if (width > 0) {
        raf = requestAnimationFrame(erase);
    }
}

underline.addEventListener('mouseenter', () => {
    cancelAnimationFrame(raf);
    drawing = true;
    erasing = false;
    raf = requestAnimationFrame(draw);
});

underline.addEventListener('mouseleave', () => {
    cancelAnimationFrame(raf);
    drawing = false;
    erasing = true;
    raf = requestAnimationFrame(erase);
})
