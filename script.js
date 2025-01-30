// Example: Toggle more information
document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = 'Show More';
    moreInfoButton.id = 'moreInfo';
    document.querySelector('.languages').appendChild(moreInfoButton);

    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = 'I am passionate about learning new languages and building beautiful websites!';
    infoParagraph.style.display = 'none';
    infoParagraph.id = 'info';
    document.querySelector('.languages').appendChild(infoParagraph);

    moreInfoButton.addEventListener('click', function () {
        const info = document.getElementById('info');
        if (info.style.display === 'none') {
            info.style.display = 'block';
            moreInfoButton.textContent = 'Show Less';
        } else {
            info.style.display = 'none';
            moreInfoButton.textContent = 'Show More';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skillsGrid = document.querySelector('.skills-grid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsGrid.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.5 // Dispara quando 50% do elemento estiver visível
    });

    observer.observe(skillsGrid);
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.skills-grid, .projects-grid, .video-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.5 // Dispara quando 50% do elemento estiver visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});