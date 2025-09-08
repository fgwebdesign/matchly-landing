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
        // Hero tag
        const heroTagImg = banner.querySelector('.hero-tag img');
        const heroTagSpan = banner.querySelector('.hero-tag span');
        if (heroTagImg && heroTagSpan) {
            heroTagImg.src = CONFIG.MAIN_BANNER.logo.path;
            heroTagImg.alt = CONFIG.MAIN_BANNER.logo.alt;
            heroTagSpan.textContent = CONFIG.MAIN_BANNER.title;
        }
        
        // Headline y descripción
        const headline = banner.querySelector('.hero-headline');
        const subtitle = banner.querySelector('.hero-subtitle');
        if (headline) headline.innerHTML = CONFIG.MAIN_BANNER.headline;
        if (subtitle) subtitle.innerHTML = CONFIG.MAIN_BANNER.description;
        
        // Imágenes del banner
        const bannerImages = banner.querySelectorAll('.right-image img');
        if (bannerImages[0]) {
            bannerImages[0].src = CONFIG.MAIN_BANNER.images.admin_panel.path;
            bannerImages[0].alt = CONFIG.MAIN_BANNER.images.admin_panel.alt;
        }
        if (bannerImages[1]) {
            bannerImages[1].src = CONFIG.MAIN_BANNER.images.mobile_app.path;
            bannerImages[1].alt = CONFIG.MAIN_BANNER.images.mobile_app.alt;
        }
        
        // Aplicar CTA buttons
        const primaryCTA = banner.querySelector('.main-cta');
        const secondaryCTA = banner.querySelector('.secondary-cta');
        if (primaryCTA) {
            primaryCTA.href = CONFIG.MAIN_BANNER.cta.primary.href;
            primaryCTA.innerHTML = CONFIG.MAIN_BANNER.cta.primary.text;
        }
        if (secondaryCTA) {
            secondaryCTA.href = CONFIG.MAIN_BANNER.cta.secondary.href;
            secondaryCTA.textContent = CONFIG.MAIN_BANNER.cta.secondary.text;
        }
    }

    // Aplicar sección Sobre Nosotros
    const about = document.querySelector('#about');
    if (about) {
        about.querySelector('.section-heading h6').textContent = CONFIG.ABOUT.title;
        about.querySelector('.section-heading h4').innerHTML = CONFIG.ABOUT.subtitle;
        
        // Generar slides del carrusel
        const carousel = about.querySelector('.about-carousel');
        if (carousel) {
            carousel.innerHTML = CONFIG.ABOUT.carousel.main_slides
                .map(slide => `
                    <div class="item">
                        <img src="${slide.path}" alt="${slide.alt}" class="main-slide">
                    </div>
                `).join('');
        }

        // Generar miniaturas flotantes
        CONFIG.ABOUT.carousel.floating_thumbnails.forEach(thumb => {
            const thumbElement = about.querySelector(`.floating-thumbnail.${thumb.position}`);
            if (thumbElement) {
                const img = thumbElement.querySelector('img');
                if (img) {
                    img.src = thumb.path;
                    img.alt = thumb.alt;
                }
            }
        });

        const contentContainer = about.querySelector('.about-right-content');
        contentContainer.querySelector('.intro-text').textContent = CONFIG.ABOUT.content.intro;
        contentContainer.querySelector('.highlight-text').innerHTML = CONFIG.ABOUT.content.highlight;
        contentContainer.querySelector('.description-text').textContent = CONFIG.ABOUT.content.description;

        const featuresList = about.querySelector('.features-list');
        featuresList.innerHTML = CONFIG.ABOUT.content.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
            
        contentContainer.querySelector('.objective-text').innerHTML = CONFIG.ABOUT.content.conclusion;
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
        services.querySelector('.section-heading h4').innerHTML = `Nuestras <em>${CONFIG.SERVICES.subtitle}</em>`;

        // Aplicar títulos e iconos de servicios a los elementos existentes
        const serviceTitles = services.querySelectorAll('.content-wrapper .title');
        const serviceIcons = services.querySelectorAll('.icon img');
        
        CONFIG.SERVICES.tabs.forEach((tab, index) => {
            if (serviceTitles[index]) {
                serviceTitles[index].textContent = tab.title;
            }
            if (serviceIcons[index]) {
                serviceIcons[index].src = tab.icon; 
                serviceIcons[index].alt = tab.title;
            }
        });

        // Aplicar contenido de las pestañas de servicios
        const serviceContentTabs = services.querySelectorAll('.nacc li');
        CONFIG.SERVICES.tabs.forEach((tab, index) => {
            const contentTab = serviceContentTabs[index];
            if (contentTab && tab.content) {
                const leftText = contentTab.querySelector('.left-text');
                if (leftText) {
                    const h4 = leftText.querySelector('h4');
                    const p = leftText.querySelector('p');
                    const ticksList = leftText.querySelector('.ticks-list');
                    
                    if (h4) h4.textContent = tab.content.title;
                    if (p) p.textContent = tab.content.description;
                    
                    if (ticksList && tab.content.features) {
                        const iconClass = tab.isComingSoon ? 'fa fa-clock-o' : 'fa fa-check';
                        ticksList.innerHTML = tab.content.features
                            .map(feature => `<span><i class="${iconClass}"></i> ${feature}</span>`)
                            .join('');
                    }
                    
                    // Manejar update notice para torneos
                    const updateNotice = leftText.querySelector('.update-notice');
                    if (updateNotice && tab.isComingSoon && tab.content.conclusion) {
                        updateNotice.querySelector('.update-icon').textContent = '🚀';
                        updateNotice.querySelector('h5').textContent = 'Próxima Actualización';
                        updateNotice.querySelector('p').textContent = tab.content.conclusion;
                    }
                }
                
                const rightImage = contentTab.querySelector('.right-image img');
                if (rightImage && tab.content.image) {
                    rightImage.src = tab.content.image;
                    rightImage.alt = tab.title;
                }
            }
        });
    }

    // Aplicar sección de contacto
    const contact = document.querySelector('#contact');
    if (contact) {
        // Aplicar títulos
        contact.querySelector('.section-heading h6').textContent = CONFIG.CONTACT.title;
        contact.querySelector('.section-heading h4').innerHTML = `${CONFIG.CONTACT.subtitle} <em>Now</em>`;

        // Aplicar imagen decorativa
        const decorImage = contact.querySelector('.contact-dec img');
        if (decorImage) {
            decorImage.src = CONFIG.CONTACT.decoration_image.path;
            decorImage.alt = CONFIG.CONTACT.decoration_image.alt;
        }

        // Aplicar mapa
        const mapIframe = contact.querySelector('#map iframe');
        if (mapIframe) {
            mapIframe.src = CONFIG.CONTACT.map.embed_url;
        }

        // Aplicar información de contacto
        const infoPosts = contact.querySelectorAll('.info-post');
        CONFIG.CONTACT.contact_info.forEach((info, index) => {
            const infoPost = infoPosts[index];
            if (infoPost) {
                const icon = infoPost.querySelector('.icon img');
                const link = infoPost.querySelector('.icon a');
                
                if (icon) {
                    icon.src = info.icon;
                    icon.alt = info.type;
                }
                
                if (link) {
                    link.href = info.type === 'email' ? `mailto:${info.value}` : 
                               info.type === 'phone' ? `tel:${info.value}` : '#';
                    link.textContent = info.value;
                }
            }
        });

        // Aplicar configuración del formulario
        const form = contact.querySelector('form#contact');
        if (form) {
            // Configurar campos del formulario
            Object.entries(CONFIG.CONTACT.form.fields).forEach(([fieldName, config]) => {
                const input = form.querySelector(`#${fieldName}`);
                if (input) {
                    input.placeholder = config.placeholder;
                    if (config.required) {
                        input.required = true;
                    }
                }
            });

            // Configurar botón de envío
            const submitButton = form.querySelector('#form-submit');
            if (submitButton) {
                submitButton.textContent = CONFIG.CONTACT.form.submit_button.text;
            }
        }
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
