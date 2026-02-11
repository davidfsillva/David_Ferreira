// =============================
// NAVBAR SCROLL EFFECT
// =============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.padding = "1rem 8%";
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
  } else {
    navbar.style.padding = "1.5rem 8%";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
  }
});

// =============================
// MODAL FUNCTIONALITY
// =============================
const modal = document.querySelector(".modal-overlay");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const closeModal = document.querySelector(".close-modal");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    const desc = card.querySelector("p").innerText;
    const img = card.querySelector("img").src;

    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalImg.style.backgroundImage = `url(${img})`;

    // limpar tags tecnológicas caso existam
    modalTech.innerHTML = "";

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// Fechar modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Fechar clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// =============================
// SCROLL REVEAL ANIMATION
// =============================
const revealElements = document.querySelectorAll(
  ".hero-content, .mockup-wrapper, .project-card, .section-header, .cta-section"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// =============================
// BUTTON MICRO INTERACTION
// =============================
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .btn-whatsapp");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
