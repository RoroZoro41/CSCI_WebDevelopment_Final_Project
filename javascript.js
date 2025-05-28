const pawColors = [
    "#ffb6e6", // light pink
    "#ff69b4", // hot pink
    "#e3d095", // milk latte
    "#7965c1", // light purple
    "#483aa0"  // dark purple
];

let lastTrailTime = 0;
const minTrailInterval = 60; // ms, controls particle amount

document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastTrailTime < minTrailInterval) return;
    lastTrailTime = now;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail-paw';

    // Random color
    const color = pawColors[Math.floor(Math.random() * pawColors.length)];
    trail.style.color = color;

    // Position
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';

    // Random fall velocity
    const velocity = 1 + Math.random() * 2; // px per frame
    let y = e.clientY;
    let opacity = 1;
    let frame = 0;

    // Use a paw icon (Font Awesome)
    trail.innerHTML = '<i class="fa-solid fa-paw"></i>';
    document.body.appendChild(trail);

    function animate() {
        frame++;
        y += velocity;
        opacity -= 0.03 + Math.random() * 0.01;
        trail.style.top = y + 'px';
        trail.style.opacity = opacity;
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            trail.remove();
        }
    }
    animate();
});

// Asteroid-like flying paw animation
function spawnAsteroidPaw() {
    // Lower saturation by blending with white
    function desaturate(hex, amount = 0.5) {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        r = Math.round(r + (255 - r) * amount);
        g = Math.round(g + (255 - g) * amount);
        b = Math.round(b + (255 - b) * amount);
        return `rgb(${r},${g},${b})`;
    }

    const pawColors = [
        "#ffb6e6", "#ff69b4", "#e3d095", "#7965c1", "#483aa0"
    ];
    const paw = document.createElement('div');
    paw.className = 'asteroid-paw';
    paw.innerHTML = '<i class="fa-solid fa-paw"></i>';
    const color = desaturate(pawColors[Math.floor(Math.random() * pawColors.length)], 0.45);
    paw.style.color = color;
    const size = 18 + Math.random() * 54;
    paw.style.fontSize = size + "px";

    // Much more varied start position (anywhere along top or left edge)
    let edge = Math.random();
    let startX, startY;
    if (edge < 0.5) {
        // Start somewhere along the top edge
        startX = Math.random() * window.innerWidth * 0.7 - 40;
        startY = -40;
    } else {
        // Start somewhere along the left edge
        startX = -40;
        startY = Math.random() * window.innerHeight * 0.7 - 40;
    }
    paw.style.left = `${startX}px`;
    paw.style.top = `${startY}px`;
    paw.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(paw);

    // Much more varied end position (anywhere along right or bottom edge)
    edge = Math.random();
    let endX, endY;
    if (edge < 0.5) {
        // Land somewhere along the right edge
        endX = window.innerWidth + 40;
        endY = Math.random() * window.innerHeight * 1.2 - 40;
    } else {
        // Land somewhere along the bottom edge
        endX = Math.random() * window.innerWidth * 1.2 - 40;
        endY = window.innerHeight + 40;
    }

    const duration = 6000 + Math.random() * 4000; // 6s to 10s

    paw.animate([
        {
            left: `${startX}px`,
            top: `${startY}px`,
            opacity: 1,
            transform: paw.style.transform
        },
        {
            left: `${endX}px`,
            top: `${endY}px`,
            opacity: 0.2,
            transform: `rotate(${360 + Math.random() * 180}deg)`
        }
    ], {
        duration: duration,
        easing: "linear"
    });

    setTimeout(() => paw.remove(), duration);
}

// Increase spawn rate: at least one paw on screen at any time
setInterval(() => {
    spawnAsteroidPaw();
}, 1200); // spawn every 1.2s (duration is 6-10s, so always at least one visible)