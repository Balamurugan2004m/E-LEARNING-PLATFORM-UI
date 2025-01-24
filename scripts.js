document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');

 
    let progress = 60; 
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            progressBar.textContent = `${progress}% Completed`;
        } else {
            clearInterval(interval);
        }
    }, 1000); 


});