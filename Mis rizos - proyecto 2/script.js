document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para la navegación
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Opcional: Cerrar menú móvil si existiera
            // const navMenu = document.querySelector('.nav-menu');
            // navMenu.classList.remove('active');
        });
    });

    // Acordeón de Preguntas Frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // El div de la respuesta
            
            // Cerrar otras respuestas abiertas
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle de la respuesta actual
            question.classList.toggle('active');
            answer.classList.toggle('open');
        });
    });

    // Opcional: Carrusel básico para la Galería y Testimonios (requiere librerías o más código JS si es avanzado)
    // Para una implementación simple, podrías usar una librería como Swiper.js o Slick Carousel.
    // Si quieres algo personalizado sin librerías, me lo puedes pedir, pero implica más JS.
    // Por ahora, el HTML y CSS ya permiten un scroll horizontal básico para la galería y testimonio.
});