// Fade-in animation for the invitation card
window.onload = function() {
    const card = document.querySelector('.invitation-card');
    let opacity = 0;
    let translateY = 50;
    
    // Gradually fade in and move the card upwards
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.02;
            translateY -= 1;
            card.style.opacity = opacity;
            card.style.transform = `translateY(${translateY}px)`;
        }
    }, 20); // Set the interval speed
};
