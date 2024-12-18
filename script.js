// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) { 
    e.preventDefault(); 
    alert('Merci pour votre message, nous vous répondrons bientôt !'); 
    this.reset(); 
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
        function toggleMenu() {
            var menu = document.querySelector(".menu");
            menu.classList.toggle("active");
        }
        function toggleMenu() {
            var menu = document.getElementById("fullscreenMenu");
        }
        function scrollLeft() {
            const slider = document.querySelector('.slider-container');
            slider.scrollLeft -= 200; // Scroll to the left by 200px
        }

        function scrollRight() {
            const slider = document.querySelector('.slider-container');
            slider.scrollLeft += 200; // Scroll to the right by 200px
        }

    });
});

// Sélectionner toutes les cartes pour l'animation au défilement
const cards = document.querySelectorAll('.card-avis');

// Créer un observateur d'intersection pour les cartes
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running'; // Lancer l'animation quand la carte est visible
            }
        });
    },
    { threshold: 0.1 } // Se déclenche lorsque 10% de la carte est visible
);

// Observer chaque carte
cards.forEach((card) => {
    card.style.animationPlayState = 'paused'; // Animation en pause par défaut
    observer.observe(card);
});

// Sélectionner toutes les étoiles pour la notation
const stars = document.querySelectorAll('.star');

// Ajouter des gestionnaires d'événements pour chaque étoile
stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.dataset.value; // Récupère la valeur de la note (de l'étoile cliquée)
        const parent = star.parentElement; // Trouve le conteneur des étoiles
        const allStars = parent.querySelectorAll('.star');

        // Met à jour l'état des étoiles en fonction de la note sélectionnée
        allStars.forEach((s, index) => {
            if (index < rating) {
                s.innerHTML = '&#9733;'; // Étoile pleine
            } else {
                s.innerHTML = '&#9734;'; // Étoile vide
            }
        });

        // Affiche la note sélectionnée dans la console (facultatif)
        console.log(`Note sélectionnée : ${rating}`);
    });
});