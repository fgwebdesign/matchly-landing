import CONFIG from './config.js';

// Función para aplicar la configuración al DOM
document.addEventListener('DOMContentLoaded', () => {
    // Aplicar información de contacto
    document.querySelectorAll('.info .fa-envelope').forEach(el => {
        el.parentElement.href = `mailto:${CONFIG.CONTACT_INFO.email}`;
        el.parentElement.textContent = CONFIG.CONTACT_INFO.email;
    });

    document.querySelectorAll('.info .fa-phone').forEach(el => {
        el.parentElement.href = `tel:${CONFIG.CONTACT_INFO.phone}`;
        el.parentElement.textContent = CONFIG.CONTACT_INFO.phone;
    });

    // Aplicar logo
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.src = CONFIG.HEADER.logo.path;
        logo.alt = CONFIG.HEADER.logo.alt;
    }

    // Aplicar menú
    const menuContainer = document.querySelector('.nav');
    if (menuContainer) {
        menuContainer.innerHTML = CONFIG.HEADER.menu_items
            .map(item => `
                <li class="scroll-to-section">
                    <a href="${item.href}" ${item.isActive ? 'class="active"' : ''}>${item.text}</a>
                </li>
            `).join('');
    }

    // Aplicar banner principal
    const banner = document.querySelector('.main-banner');
    if (banner) {
        banner.querySelector('h6').textContent = CONFIG.MAIN_BANNER.title;
        banner.querySelector('h2').textContent = CONFIG.MAIN_BANNER.headline;
        banner.querySelector('p').textContent = CONFIG.MAIN_BANNER.description;
        
        const bannerImages = banner.querySelectorAll('img');
        bannerImages[0].src = CONFIG.MAIN_BANNER.images.admin_panel.path;
        bannerImages[0].alt = CONFIG.MAIN_BANNER.images.admin_panel.alt;
        bannerImages[1].src = CONFIG.MAIN_BANNER.images.mobile_app.path;
        bannerImages[1].alt = CONFIG.MAIN_BANNER.images.mobile_app.alt;
    }

    // Aplicar sección Sobre Nosotros
    const about = document.querySelector('#about');
    if (about) {
        about.querySelector('.section-heading h6').textContent = CONFIG.ABOUT.title;
        about.querySelector('.section-heading h4').innerHTML = CONFIG.ABOUT.subtitle;
        
        const aboutImage = about.querySelector('.about-left-image img');
        aboutImage.src = CONFIG.ABOUT.main_image.path;
        aboutImage.alt = CONFIG.ABOUT.main_image.alt;

        const contentContainer = about.querySelector('.about-right-content');
        const paragraphs = contentContainer.querySelectorAll('p');
        paragraphs[0].textContent = CONFIG.ABOUT.content.intro;
        paragraphs[1].innerHTML = CONFIG.ABOUT.content.highlight;
        paragraphs[2].textContent = CONFIG.ABOUT.content.description;

        const featuresList = about.querySelector('.features-list');
        featuresList.innerHTML = CONFIG.ABOUT.content.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
    }

    // Aplicar estadísticas
    CONFIG.ABOUT.stats.forEach((stat, index) => {
        const statElement = document.querySelector(`.skill-item:nth-child(${index + 1}) .progress-value div`);
        if (statElement) {
            statElement.innerHTML = `${stat.percentage}%<br><span>${stat.label}</span>`;
        }
    });

    // Aplicar servicios
    const services = document.querySelector('#services');
    if (services) {
        services.querySelector('.section-heading h6').textContent = CONFIG.SERVICES.title;
        services.querySelector('.section-heading h4').innerHTML = `${CONFIG.SERVICES.subtitle}`;

        // Aplicar tabs de servicios
        const menuContainer = services.querySelector('.menu');
        menuContainer.innerHTML = CONFIG.SERVICES.tabs
            .map((tab, index) => `
                <div class="${index === 0 ? 'first-thumb active' : ''}">
                    <div class="thumb">
                        <span class="icon"><img src="${tab.icon}" alt=""></span>
                        ${tab.title}
                        ${tab.isComingSoon ? '<span class="coming-soon-tag">Coming Soon</span>' : ''}
                    </div>
                </div>
            `).join('');
    }

    // Aplicar footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = `
            ${CONFIG.FOOTER.copyright}
            <br>
            ${CONFIG.FOOTER.credits.text}<a href="${CONFIG.FOOTER.credits.link}" target="_parent" title="free css templates">${CONFIG.FOOTER.credits.label}</a>
        `;
    }
});
