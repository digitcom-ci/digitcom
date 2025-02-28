document.addEventListener("DOMContentLoaded", function () {
    // Gestion du menu hamburger
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active"); // Afficher/Cacher le menu
            hamburger.classList.toggle("open"); // Transformer le hamburger en croix
        });
    }

    // Mise en évidence du lien actif dans le menu
    const links = document.querySelectorAll(".menu a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Gestion du slider automatique
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        if (slides.length > 0) {
            slides[index].classList.add("active");
            index = (index + 1) % slides.length;
        }
    }

    if (slides.length > 0) {
        setInterval(showSlide, 4000); // Change de slide toutes les 3 secondes
    }

    // Effet au clic sur le bouton "about"
    const button = document.querySelector(".about.html .btn");
    if (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le lien de s’ouvrir
            this.classList.toggle("clicked");
        });
    }

    // Ajout de la classe visible à la section "about"
    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
        aboutSection.classList.add("visible");
    }

    // Sélectionner toutes les cartes produit
    const cards = document.querySelectorAll(".product-card");

    // Effet au clic sur une carte pour changer de couleur
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener("click", function () {
                cards.forEach(c => c.classList.remove("active")); // Désactive toutes les autres cartes
                this.classList.add("active"); // Active celle cliquée
            });
        });
    }

    // Observer si les cartes apparaissent dans l'écran et ajouter l'animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible"); // Ajoute l'animation
                }, index * 400); // Ajout progressif
            }
        });
    }, { threshold: 0.2 });

    // Appliquer l'observer aux cartes
    if (cards.length > 0) {
        cards.forEach(card => observer.observe(card));
    }
});

const slider = document.querySelector('.presentation-slider');
const slides = document.querySelectorAll('.presentation-slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function showSlide(i) {
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
    index++;
    showSlide(index);
});

prev.addEventListener('click', () => {
    index--;
    showSlide(index);
});

// Défilement automatique
setInterval(() => {
    index++;
    showSlide(index);
}, 5000);
