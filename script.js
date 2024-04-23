document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.querySelector('.no-button');
    if (noButton) {
        noButton.addEventListener('mouseover', function() {
            // Ensure the button does not go outside the viewport
            const maxX = window.innerWidth - this.offsetWidth;
            const maxY = window.innerHeight - this.offsetHeight;
            
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            this.style.position = 'absolute';  // Ensure the button can freely move
            this.style.left = `${newX}px`;
            this.style.top = `${newY}px`;
        });
    }

    const yesButtons = document.querySelectorAll('.yes-button');
    yesButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (window.location.pathname.includes('index')) {
                window.location.href = './data.html';
            } else if (window.location.pathname.includes('data')) {
                window.location.href = './final.html';
            }
        });
    });
});
