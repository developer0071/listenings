const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    const size = Math.random() * 5 + 4; // Random size between 3px and 11px
    const leftPosition = Math.random() * 100; // Random horizontal position
    const animationDuration = Math.random() * 6 + 5; // Random duration between 3s and 7s

    snowflake.classList.add('snowflake');
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${leftPosition}vw`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    snowContainer.appendChild(snowflake);

    // Remove snowflake after animation ends
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Create snowflakes at intervals
setInterval(createSnowflake, 400); // Adjust the interval for more or less snow