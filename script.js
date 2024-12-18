// Gestion du formulaire de contact
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Merci pour votre message, nous vous répondrons bientôt !");
      this.reset();
    });
  }

  // Gestion des liens de navigation
  const navLinks = document.querySelectorAll("nav ul li a");
  
  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Supprime l'état actif des autres liens
        navLinks.forEach(link => link.classList.remove("active"));
        // Ajoute l'état actif au lien cliqué
        link.classList.add("active");
      });
    });
  }

  // Gestion du menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // Gestion des cartes avec IntersectionObserver
  const cards = document.querySelectorAll(".card-avis");
  
  if (cards.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running"; // Lancer l'animation
          }
        });
      },
      { threshold: 0.1 } // Se déclenche lorsque 10% de la carte est visible
    );

    cards.forEach(card => {
      card.style.animationPlayState = "paused"; // Animation en pause par défaut
      observer.observe(card);
    });
  }

  // Gestion des étoiles (notation)
  const stars = document.querySelectorAll(".star");
  
  if (stars.length) {
    stars.forEach(star => {
      star.addEventListener("click", () => {
        const rating = star.dataset.value; // Récupère la note
        const parent = star.parentElement; // Conteneur des étoiles
        const allStars = parent.querySelectorAll(".star");

        // Met à jour l'état des étoiles
        allStars.forEach((s, index) => {
          s.innerHTML = index < rating ? "&#9733;" : "&#9734;"; // Étoile pleine ou vide
        });

        // Affiche une note dans la console (peut être remplacé par d'autres actions)
        console.log(`Note sélectionnée : ${rating}`);
      });
    });
  }
});
