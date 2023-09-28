const darkModeToggle = document.getElementById('darkModeToggle');
const lightModeToggle = document.getElementById('lightModeToggle');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    darkModeToggle.style.display = 'none';
    lightModeToggle.style.display = 'inline';
});

lightModeToggle.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
    lightModeToggle.style.display = 'none';
    darkModeToggle.style.display = 'inline';
});



document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
