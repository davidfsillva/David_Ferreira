// Dados dos projetos (Simulando um CMS)
const projects = [
    {
        title: "Nexus Platform",
        desc: "Uma plataforma SaaS focada em análise de dados em tempo real. Desenvolvida com foco em performance extrema e acessibilidade.",
        tech: ["HTML5", "CSS Grid", "JavaScript ES6", "Chart.js"],
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Vogue E-commerce",
        desc: "Interface de luxo para varejo de moda. Experiência de compra fluida com micro-interações e carregamento inteligente de imagens.",
        tech: ["UI Design", "Clean Code", "Animations", "E-commerce"],
        img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Crypto Dashboard",
        desc: "Painel financeiro para gestão de ativos digitais. Interface escura otimizada para longas sessões de uso (Eye-care).",
        tech: ["JavaScript", "Real-time API", "Figma", "SASS"],
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
    }
];

// Seletores
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.querySelector('.close-modal');

// Abrir Modal
function openModal(index) {
    const project = projects[index];
    
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDesc').innerText = project.desc;
    document.getElementById('modalImg').style.background = `url('${project.img}') center/cover`;
    
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = ''; // Limpa as tags anteriores
    
    project.tech.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'badge';
        tag.innerText = t;
        techContainer.appendChild(tag);
    });

    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Trava o scroll
}

// Fechar Modal
closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar ao clicar fora do conteúdo
window.onclick = (event) => {
    if (event.target == modalOverlay) {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Scroll Reveal Suave
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});