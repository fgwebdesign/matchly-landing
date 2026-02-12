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
        
        const aboutImage = about.querySelector('.about-left-image img');
        aboutImage.src = CONFIG.ABOUT.main_image.path;
        aboutImage.alt = CONFIG.ABOUT.main_image.alt;

        const contentContainer = about.querySelector('.about-right-content');
        contentContainer.querySelector('.intro-text').textContent = CONFIG.ABOUT.content.intro;
        contentContainer.querySelector('.highlight-text').innerHTML = CONFIG.ABOUT.content.highlight;
        contentContainer.querySelector('.description-text').textContent = CONFIG.ABOUT.content.description;

        const featuresGrid = about.querySelector('.features-grid');
        if (featuresGrid) {
            // Crear cards en formato de 3 columnas
            const featuresHTML = CONFIG.ABOUT.content.features
                .map((feature, index) => {
                    // Extraer el emoji/icono del feature
                    const emojiMatch = feature.match(/^([📊🏆📅🎾💳🏪📸👨‍🏫📱🏢])\s*/);
                    const emoji = emojiMatch ? emojiMatch[1] : '✓';
                    const text = emojiMatch ? feature.replace(emojiMatch[0], '').trim() : feature;
                    
                    return `
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="feature-card wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="${0.1 * index}s">
                                <div class="feature-icon">${emoji}</div>
                                <div class="feature-text">${text}</div>
                            </div>
                        </div>
                    `;
                })
                .join('');
            featuresGrid.innerHTML = featuresHTML;
        }
        
        // También mantener compatibilidad con la lista antigua por si acaso
        const featuresList = about.querySelector('.features-list');
        if (featuresList) {
            featuresList.style.display = 'none';
        }
            
        contentContainer.querySelector('.objective-text').innerHTML = CONFIG.ABOUT.content.conclusion;
    }

    // Aplicar estadísticas
    CONFIG.ABOUT.stats.forEach((stat, index) => {
        const statElement = document.querySelector(`.skill-item:nth-child(${index + 1}) .progress-value div`);
        if (statElement) {
            statElement.innerHTML = `${stat.percentage}%<br><span>${stat.label}</span>`;
        }
    });

    // Aplicar servicios - GENERACIÓN DINÁMICA
    const services = document.querySelector('#services');
    if (services) {
        services.querySelector('.section-heading h6').textContent = CONFIG.SERVICES.title;
        services.querySelector('.section-heading h4').innerHTML = `${CONFIG.SERVICES.subtitle}`;

        // Generar tabs dinámicamente
        const menuContainer = services.querySelector('.menu');
        const contentContainer = services.querySelector('.nacc');

        if (menuContainer && contentContainer) {
            // Limpiar contenido existente
            menuContainer.innerHTML = '';
            contentContainer.innerHTML = '';

            // Generar tabs y contenido
            CONFIG.SERVICES.tabs.forEach((tab, index) => {
                // Crear tab item
                const tabWrapper = document.createElement('div');
                tabWrapper.className = index === 0 ? 'first-thumb active' : '';
                
                const tabHTML = `
                    <div class="thumb">
                        <span class="icon"><img src="${tab.icon}" alt="${tab.title}"></span>
                        <div class="content-wrapper">
                            <span class="title">${tab.title}</span>
                        </div>
                        ${tab.isComingSoon ? '<span class="coming-soon-tag">Coming Soon</span>' : ''}
                    </div>
                `;
                tabWrapper.innerHTML = tabHTML;
                menuContainer.appendChild(tabWrapper);

                // Crear contenido tab
                const contentItem = document.createElement('li');
                contentItem.className = index === 0 ? 'active' : '';
                
                const conclusionHTML = tab.content.conclusion 
                    ? `<p style="margin-top: 20px; font-weight: 500; color: #4da6e7;">${tab.content.conclusion}</p>` 
                    : '';

                const updateNoticeHTML = tab.isComingSoon && tab.content.conclusion
                    ? `
                        <div class="update-notice" style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4da6e7;">
                            <div class="update-icon" style="font-size: 24px; margin-bottom: 10px;">🚀</div>
                            <div class="update-content">
                                <h5 style="margin: 0 0 5px 0; color: #2a2a2a; font-weight: 600;">Próxima Actualización</h5>
                                <p style="margin: 0; color: #666;">${tab.content.conclusion}</p>
                            </div>
                        </div>
                    `
                    : '';

                const contentHTML = `
                    <div>
                        <div class="thumb">
                            <div class="row">
                                <div class="col-lg-6 align-self-center">
                                    <div class="left-text">
                                        <h4>${tab.content.title}</h4>
                                        <p>${tab.content.description}</p>
                                        <div class="ticks-list">
                                            ${tab.content.features.map(feature => 
                                                `<span><i class="fa fa-check"></i> ${feature}</span>`
                                            ).join('')}
                                        </div>
                                        ${!tab.isComingSoon ? conclusionHTML : ''}
                                        ${updateNoticeHTML}
                                    </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                    <div class="right-image">
                                        <img src="${tab.content.image}" alt="${tab.title}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contentItem.innerHTML = contentHTML;
                contentContainer.appendChild(contentItem);
            });

            // Inicializar sistema de tabs después de crear el contenido
            const firstTab = menuContainer.querySelector('.first-thumb');
            const firstContent = contentContainer.querySelector('li.active');
            
            // Función para inicializar tabs
            const initTabs = () => {
                if (typeof $ === 'undefined') {
                    console.warn('jQuery no está disponible');
                    return;
                }
                
                // Asegurar que el primer tab y contenido estén activos
                if (firstTab && firstContent) {
                    firstTab.classList.add('active');
                    firstContent.classList.add('active');
                    
                    // Esperar a que las imágenes se carguen antes de calcular altura
                    const images = firstContent.querySelectorAll('img');
                    let imagesLoaded = 0;
                    const totalImages = images.length;
                    
                    if (totalImages === 0) {
                        setHeight();
                    } else {
                        images.forEach(img => {
                            if (img.complete) {
                                imagesLoaded++;
                                if (imagesLoaded === totalImages) setHeight();
                            } else {
                                img.addEventListener('load', () => {
                                    imagesLoaded++;
                                    if (imagesLoaded === totalImages) setHeight();
                                });
                                img.addEventListener('error', () => {
                                    imagesLoaded++;
                                    if (imagesLoaded === totalImages) setHeight();
                                });
                            }
                        });
                    }
                    
                    function setHeight() {
                        const listItemHeight = $(firstContent).innerHeight();
                        $('.naccs ul').height(listItemHeight + 'px');
                    }
                }
                
                // Re-bind eventos después de generar contenido dinámico
                $(document).off('click', '.naccs .menu div');
                $(document).on('click', '.naccs .menu div', function() {
                    var numberIndex = $(this).index();
                    
                    if (!$(this).hasClass("active")) {
                        $(".naccs .menu div").removeClass("active");
                        $(".naccs ul li").removeClass("active");
                        
                        $(this).addClass("active");
                        var targetLi = $(".naccs ul").find("li:eq(" + numberIndex + ")");
                        targetLi.addClass("active");
                        
                        // Esperar un poco para que la transición se complete
                        setTimeout(() => {
                            var listItemHeight = targetLi.innerHeight();
                            $(".naccs ul").height(listItemHeight + "px");
                        }, 50);
                    }
                });
            };
            
            // Ejecutar después de que todo esté listo
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initTabs);
            } else {
                // Si ya está cargado, ejecutar después de un pequeño delay
                setTimeout(initTabs, 100);
            }
        }
    }

    // Aplicar sección de contacto
    const contact = document.querySelector('#contact');
    if (contact) {
        // Aplicar títulos
        contact.querySelector('.section-heading h6').textContent = CONFIG.CONTACT.title;
        contact.querySelector('.section-heading h4').innerHTML = `${CONFIG.CONTACT.subtitle}`;

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
            ${CONFIG.FOOTER.credits.text}<a href="${CONFIG.FOOTER.credits.link}" target="_parent">${CONFIG.FOOTER.credits.label}</a>
        `;
    }
});
