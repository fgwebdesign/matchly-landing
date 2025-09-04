// Configuración General
const CONFIG = {
    // Información de contacto y redes sociales
    CONTACT_INFO: {
        email: 'contacto@matchlysports.com',
        phone: '+598 92 033 831',
        address: 'Montevideo, Uruguay',
        social_media: {
            facebook: 'https://www.facebook.com/matchlysports',
            instagram: 'https://www.instagram.com/matchlysports',
            linkedin: 'https://www.linkedin.com/company/matchlysports',
        }
    },

    // Configuración del Header
    HEADER: {
        logo: {
            path: 'assets/images/matchlyv3.png',
            alt: 'Matchly Sports Logo'
        },
        menu_items: [
            { text: 'Inicio', href: '#top', isActive: true },
            { text: 'Sobre Matchly', href: '#about' },
            { text: 'Servicios', href: '#services' },
            { text: 'Proyectos', href: '#portfolio' },
            { text: 'Noticias', href: '#blog' },
            { text: 'Contacto', href: '#contact' }
        ]
    },

    // Sección Banner Principal
    MAIN_BANNER: {
        logo: {
            path: 'assets/images/matchlyv3.png',
            alt: 'Matchly Logo'
        },
        title: 'Sports App',
        headline: '<span class="highlight-primary">Gestión</span> y <span class="highlight-secondary">juego</span><br>en una sola <span class="gradient-text">app</span> <span class="emoji">⚡</span>',
        description: '<span class="brand">Matchly Sports</span> une a <span class="highlight-text">clubes</span>, <span class="highlight-text">jugadores</span> y <span class="highlight-text">sponsors</span> en una experiencia digital completa: <span class="features">ligas, torneos, resultados y galería</span> en tiempo real.',
        cta: {
            primary: {
                text: '👉 Probar Matchly',
                href: '#contact'
            },
            secondary: {
                text: 'Conocé más sobre las funcionalidades',
                href: '#services'
            }
        },
        images: {
            admin_panel: {
                path: 'assets/images/admin1.png',
                alt: 'Matchly Sports Admin Panel'
            },
            mobile_app: {
                path: 'assets/images/mobile2.png',
                alt: 'Matchly Sports Mobile App'
            }
        }
    },

    // Sección Sobre Nosotros
    ABOUT: {
        title: 'Sobre nosotros',
        subtitle: 'Quiénes somos Matchly Sports',
        main_image: {
            path: 'assets/images/demo1.png',
            alt: 'Matchly Sports Demo'
        },
        content: {
            intro: 'En muchos clubes, organizar torneos y ligas de pádel significaba horas frente a un Excel: fixtures interminables, horarios difíciles de coordinar y comunicación desordenada con los jugadores.',
            highlight: 'Matchly Sports nació para resolver ese problema. 🚀',
            description: 'Somos una plataforma digital que simplifica de principio a fin la organización de torneos:',
            features: [
                '📅 Inscripciones y horarios con validaciones automáticas',
                '🎾 Fixtures y resultados generados y actualizados en tiempo real',
                '💳 Pagos vinculados a inscripciones, claros y seguros',
                '📩 Notificaciones automáticas para jugadores y organizadores'
            ],
            conclusion: 'Nuestro objetivo es simple: que los clubes y jugadores se concentren en lo más importante, disfrutar del pádel, mientras Matchly Sports se encarga del resto.'
        },
        stats: [
            { label: 'Automatización', percentage: 95 },
            { label: 'Gestión Torneos', percentage: 90 },
            { label: 'Satisfacción', percentage: 85 }
        ]
    },

    // Sección Servicios
    SERVICES: {
        title: 'Matchly Sports',
        subtitle: 'Nuestras Funcionalidades',
        tabs: [
            {
                id: 'ligas',
                title: 'Ligas de Padel',
                icon: 'assets/images/1.png',
                content: {
                    title: 'Ligas de Pádel 🏆🎾',
                    description: 'Con Matchly Sports, armar una liga es tan fácil como jugar un partido.',
                    features: [
                        'Crear ligas en minutos',
                        'Definir categorías y cupos por nivel',
                        'Seleccionar canchas y horarios disponibles',
                        'Programar partidos de forma automática',
                        'Cargar resultados en vivo'
                    ],
                    image: 'assets/images/leagues2.png'
                }
            },
            {
                id: 'torneos',
                title: 'Torneos',
                icon: 'assets/images/2.png',
                isComingSoon: true,
                content: {
                    title: 'Torneos de Pádel 🏆',
                    description: 'Organizá torneos de principio a fin sin depender de planillas.',
                    features: [
                        'Configurá categorías y cupos disponibles',
                        'Generá fixtures de forma automática',
                        'Administrá cruces y reprogramá partidos cuando sea necesario',
                        'Mostrá los resultados en tiempo real',
                        'Notificá a jugadores cada vez que se cargan horarios o resultados'
                    ],
                    conclusion: 'Todo queda centralizado en una sola app, para que el torneo fluya de manera ágil y profesional.',
                    image: 'assets/images/torneos1.png'
                }
            },
            {
                id: 'sponsors-galeria',
                title: 'Sponsors y Galería',
                icon: 'assets/images/3.png',
                content: {
                    title: 'Sponsors y Galería 📸',
                    description: 'Un espacio pensado para dar visibilidad a tus marcas y revivir los mejores momentos de cada torneo.',
                    features: [
                        '📢 Mostrá a tus sponsors en la página principal de cada torneo o liga',
                        '🖼️ El administrador sube fotos y las organiza en la galería',
                        '📲 Los jugadores pueden ver y descargar sus recuerdos en cualquier momento',
                        '🎉 Crea comunidad compartiendo la experiencia con todos los participantes'
                    ],
                    image: 'assets/images/galeria.png'
                }
            },
            {
                id: 'panel-jugador',
                title: 'Panel del Jugador',
                icon: 'assets/images/4.png',
                content: {
                    title: 'Panel del Jugador 🎾',
                    description: 'Un espacio pensado para que cada jugador tenga toda la info de su torneo al alcance de la mano.',
                    features: [
                        '📝 Inscribite en segundos a ligas o torneos desde tu celular',
                        '🕒 Elegí tu franja horaria según tu disponibilidad',
                        '📅 Consultá tus próximos partidos y recibí recordatorios automáticos',
                        '🏆 Mirá resultados en vivo y seguí la tabla de posiciones',
                        '📸 Accedé a la galería para revivir los mejores momentos'
                    ],
                    image: 'assets/images/jugador.png'
                }
            }
        ]
    },

    // Configuración del Footer
    FOOTER: {
        copyright: '© 2022 DigiMedia Co., Ltd. All Rights Reserved.',
        credits: {
            text: 'Design: ',
            link: 'https://templatemo.com',
            label: 'TemplateMo'
        }
    }
};

// Exportar la configuración
export default CONFIG;
