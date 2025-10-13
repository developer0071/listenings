document.addEventListener("DOMContentLoaded", function() {
    const halloweenContainer = document.querySelector('.halloween-container');

    function createHalloweenItem() {
        const item = document.createElement('div');
        const icons = ['🎃', '👻', '🕷️', '🦇', '💀', '🕸️'];
        const emoji = icons[Math.floor(Math.random() * icons.length)];
        const size = Math.random() * 20 + 20; // 20px to 40px
        const leftPosition = Math.random() * 100; // Random horizontal position
        const duration = Math.random() * 5 + 5; // 5s to 10s

        item.classList.add('halloween-item');
        item.textContent = emoji;
        item.style.fontSize = `${size}px`;
        item.style.left = `${leftPosition}vw`;
        item.style.animationDuration = `${duration}s`;

        halloweenContainer.appendChild(item);

        item.addEventListener('animationend', () => {
            item.remove();
        });
    }

    // Create Halloween items every 400ms
    setInterval(createHalloweenItem, 400);
});
