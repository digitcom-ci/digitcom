// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) { 
    e.preventDefault(); 
    alert('Merci pour votre message, nous vous répondrons bientôt !'); 
    this.reset(); 
});

// Sélection des liens de navigation pour ajouter l'état "actif" au lien cliqué
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Supprime l'état actif des autres liens
            navLinks.forEach(link => link.classList.remove('active'));

            // Ajoute l'état actif au lien cliqué
            link.classList.add('active');
        });
    });

    // Menu hamburger
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    // Ajoute l'événement pour afficher/masquer le menu
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active"); // Ajoute ou supprime la classe active
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