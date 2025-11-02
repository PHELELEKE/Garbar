// Enhanced Hero slider with better transitions
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll(".slide");
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
            });
            slides[index].classList.add("active");
        }
        
        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) currentSlide = 0;
            showSlide(currentSlide);
        }
        
        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000); // 5 seconds for better animation
        }
        
        function stopSlideshow() {
            clearInterval(slideInterval);
        }
        
        // Pause on hover
        const slider = document.querySelector('.slider');
        if (slider) {
            slider.addEventListener('mouseenter', stopSlideshow);
            slider.addEventListener('mouseleave', startSlideshow);
        }
        
        // Initialize
        showSlide(currentSlide);
        startSlideshow();
    }
    
    // Smooth scroll for navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});