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
            { text: 'Servicios', href: '#services' },
            { text: 'Membresía', href: '#membership' },
            { text: 'Eventos', href: '#events' },
            { text: 'Sobre Nosotros', href: '#about' },
            { text: 'Contacto', href: '#contact', isButton: true }
        ]
    },

    // Sección Banner Principal
    MAIN_BANNER: {
        tags: [
            { text: 'Membresía' },
            { text: 'Tennis' },
            { text: 'Golf' },
            { text: 'Wellness' }
        ],
        headline: 'Where nature<br>Meets the game',
        description: 'Welcome to your personal escape — world-class courts, championship golf, and natural wellness in one serene space.',
        cta: {
            primary: {
                text: 'Join the club',
                href: '#contact'
            },
            secondary: {
                text: 'Explore More',
                href: '#services'
            }
        },
        featured_image: {
            path: 'assets/images/admin1.png', // Usaremos esta imagen temporalmente
            alt: 'Club View'
        },
        stats: [
            {
                value: '6',
                label: 'Player Slots',
                icon: '🎾'
            },
            {
                value: '3rd',
                label: 'Golf Green',
                icon: '⛳'
            }
        ]
    },

    // Sección Sobre Nosotros
    ABOUT: {
        title: 'Sobre nosotros',
        subtitle: 'Quiénes somos Matchly Sports',
        carousel: {
            main_slides: [
                {
                    path: 'assets/images/matchlyadmin.png',
                    alt: 'Panel de Administración'
                },
                {
                    path: 'assets/images/matchlyadmin1.png',
                    alt: 'Gestión de Torneos'
                },
                {
                    path: 'assets/images/matchlyadmin3.png',
                    alt: 'Sistema de Ligas'
                },
                {
                    path: 'assets/images/matchlyadmin4.png',
                    alt: 'Galería de Fotos'
                }
            ],
            floating_thumbnails: [
                {
                    path: 'assets/images/matchlyadmin1.png',
                    alt: 'Característica 1',
                    position: 'top-right'
                },
                {
                    path: 'assets/images/matchlyadmin3.png',
                    alt: 'Característica 2',
                    position: 'bottom-left'
                }
            ]
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

    // Sección de Contacto
    CONTACT: {
        title: 'Contacto',
        subtitle: 'Conecta con Matchly Sports',
        decoration_image: {
            path: 'assets/images/contact-dec-v3.png',
            alt: 'Contact Decoration'
        },
        map: {
            embed_url: 'https://maps.google.com/maps?q=Montevideo,+Uruguay&t=&z=13&ie=UTF8&iwloc=&output=embed'
        },
        contact_info: [
            {
                icon: 'assets/images/phone-icon.png',
                value: '+598 92 033 831',
                type: 'phone'
            },
            {
                icon: 'assets/images/email-icon.png',
                value: 'contacto@matchlysports.com',
                type: 'email'
            },
            {
                icon: 'assets/images/location-icon.png',
                value: 'Montevideo, Uruguay',
                type: 'location'
            }
        ],
        form: {
            fields: {
                name: {
                    placeholder: 'Nombre',
                    required: true
                },
                email: {
                    placeholder: 'Email',
                    required: true
                },
                subject: {
                    placeholder: 'Asunto',
                    required: false
                },
                message: {
                    placeholder: 'Mensaje',
                    required: true
                }
            },
            submit_button: {
                text: 'Enviar Mensaje'
            }
        }
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
