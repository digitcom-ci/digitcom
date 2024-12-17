// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) { 
  e.preventDefault(); 
  alert('Merci pour votre message, nous vous répondrons bientôt !'); 
  this.reset(); 
});

// Fonction pour détecter si un élément est dans le viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Ajouter l'animation à toutes les images
const images = document.querySelectorAll('.image-animate');

function handleScroll() {
  images.forEach((img) => {
    if (isElementInViewport(img)) {
      img.classList.add('active');
    }
  });
}

// Détecter le défilement
window.addEventListener('scroll', handleScroll);

// Lancer une détection initiale au chargement
document.addEventListener('DOMContentLoaded', handleScroll);


// Sélectionnez tous les liens de navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Supprime l'état actif des autres liens
    navLinks.forEach(link => link.classList.remove('active'));

    // Ajoute l'état actif au lien cliqué
    link.classList.add('active');
  });
});

// Sélectionne le bouton menu hamburger et le conteneur de navigation
const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-links'); // Changement ici pour éviter le conflit

// Ajoute un gestionnaire d'événements pour basculer l'état
menuToggle.addEventListener('click', () => {
  navContainer.classList.toggle('active');
});

// Sélectionner toutes les cartes
const cards = document.querySelectorAll('.card-avis');

// Créer un observateur
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running'; // Lancer l'animation
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

// Sélectionnez toutes les étoiles
const stars = document.querySelectorAll('.star');

// Ajoutez des gestionnaires d'événements
stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = star.dataset.value; // Récupère la note (valeur de l'étoile cliquée)
    const parent = star.parentElement; // Trouve le conteneur de l'étoile
    const allStars = parent.querySelectorAll('.star');

    // Met à jour l'état des étoiles
    allStars.forEach((s, index) => {
      if (index < rating) {
        s.innerHTML = '&#9733;'; // Étoile pleine
      } else {
        s.innerHTML = '&#9734;'; // Étoile vide
      }
    });

    // Affiche une alerte ou enregistre la note (facultatif)
    console.log(`Note sélectionnée : ${rating}`);
  });
});



