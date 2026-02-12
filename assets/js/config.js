// Configuración General - Matchly Sports
// Plataforma completa de gestión para clubes de pádel en Uruguay

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
            alt: 'Matchly Sports Logo - Gestión completa para clubes de pádel'
        },
        menu_items: [
            { text: 'Inicio', href: '#top', isActive: true },
            { text: 'Sobre Matchly', href: '#about' },
            { text: 'Funcionalidades', href: '#services' },
            { text: 'Galería', href: '#portfolio' },
            { text: 'Contacto', href: '#contact' }
        ]
    },

    // Sección Banner Principal
    MAIN_BANNER: {
        logo: {
            path: 'assets/images/matchlyv3.png',
            alt: 'Matchly Sports - Plataforma de gestión para clubes de pádel'
        },
        title: 'Plataforma Completa',
        headline: 'La solución <span class="highlight-primary">integral</span> para <span class="highlight-secondary">clubes de pádel</span> en <span class="gradient-text">Uruguay</span>',
        description: 'Matchly Sports es la plataforma más completa para gestionar tu club de pádel. Desde ligas y torneos hasta reservas de canchas, sistema de pagos y punto de venta. Todo en un solo lugar, diseñado específicamente para clubes uruguayos.',
        cta: {
            primary: {
                text: 'Solicitar Demo Gratuita',
                href: '#contact'
            },
            secondary: {
                text: 'Explorar Funcionalidades',
                href: '#services'
            }
        },
        images: {
            admin_panel: {
                path: 'assets/images/admin1.png',
                alt: 'Panel de Administración Matchly Sports - Dashboard completo para gestión de clubes'
            },
            mobile_app: {
                path: 'assets/images/mobile2.png',
                alt: 'App Móvil Matchly Sports - Gestión desde cualquier lugar'
            }
        }
    },

    // Sección Sobre Nosotros
    ABOUT: {
        title: 'Sobre Nosotros',
        subtitle: '¿Por qué elegir Matchly Sports?',
        main_image: {
            path: 'assets/images/demo3.png',
            alt: 'Matchly Sports - Solución completa para clubes de pádel'
        },
        content: {
            intro: 'En los clubes de pádel uruguayos, organizar competencias significaba horas perdidas en planillas de Excel: fixtures interminables, horarios imposibles de coordinar, pagos manuales y comunicación desordenada con los jugadores.',
            highlight: 'Matchly Sports transforma completamente la gestión de tu club. 🚀',
            description: 'Somos la plataforma digital más completa del mercado uruguayo, diseñada específicamente para resolver todos los desafíos de los clubes de pádel:',
            features: [
                '📊 Gestión completa de ligas con programación automática y tablas de posiciones en tiempo real',
                '🏆 Torneos profesionales con formatos predefinidos y sistemas de eliminación inteligentes',
                '📅 Reserva de canchas online con disponibilidad en tiempo real',
                '🎾 Partidos semanales con sistema de inscripción y confirmación automática',
                '💳 Sistema de pagos integrado con múltiples métodos y seguimiento completo',
                '🏪 Punto de venta (POS) para gestión de productos y servicios del club',
                '📸 Galería de fotos para compartir los mejores momentos de cada competencia',
                '👨‍🏫 Gestión de profesores e instructores con perfiles y especialidades',
                '📱 Aplicación móvil para jugadores con notificaciones automáticas',
                '🏢 Soporte multi-sede para clubes con múltiples ubicaciones'
            ],
            conclusion: 'Nuestro objetivo es simple: que los clubes y jugadores se concentren en disfrutar del pádel, mientras Matchly Sports se encarga de toda la gestión administrativa de forma automatizada y profesional.'
        },
        stats: [
            { label: 'Automatización', percentage: 95 },
            { label: 'Ahorro de Tiempo', percentage: 90 },
            { label: 'Satisfacción de Clubes', percentage: 98 }
        ]
    },

    // Sección Servicios
    SERVICES: {
        title: 'Funcionalidades Completas',
        subtitle: 'Todo lo que tu club necesita en una sola plataforma',
        tabs: [
            {
                id: 'ligas',
                title: 'Ligas de Pádel',
                icon: 'assets/images/1.png',
                content: {
                    title: 'Ligas Profesionales de Pádel 🏆',
                    description: 'Crea y gestiona ligas completas con programación automática. Configura categorías, horarios flexibles, múltiples sedes y tipos de competencia (round-robin, knockout, grupos). Todo con tablas de posiciones actualizadas en tiempo real.',
                    features: [
                        'Creación de ligas en minutos con configuración avanzada',
                        'Soporte multi-sede con gestión de múltiples venues',
                        'Frecuencias flexibles: semanal, quincenal o mensual',
                        'Programación automática de partidos según disponibilidad',
                        'Tablas de posiciones actualizadas automáticamente',
                        'Carga de resultados en tiempo real con validaciones',
                        'Dashboard completo con estadísticas y métricas',
                        'Notificaciones automáticas a jugadores por email y app',
                        'Gestión de inscripciones y pagos integrada',
                        'Visualización de fixtures y calendarios personalizados'
                    ],
                    image: 'assets/images/leagues2.png',
                    conclusion: 'Elimina el trabajo manual. Las ligas se organizan solas mientras tú te enfocas en lo importante.'
                }
            },
            {
                id: 'torneos',
                title: 'Torneos',
                icon: 'assets/images/2.png',
                isComingSoon: false,
                content: {
                    title: 'Torneos Profesionales 🏆',
                    description: 'Organiza torneos de principio a fin sin depender de planillas. Formatos predefinidos para 6, 9, 12 y 16 jugadores, con agrupación inteligente y sistemas de eliminación automáticos. Bracket visual, gestión de pagos y notificaciones en tiempo real.',
                    features: [
                        'Formatos predefinidos (6, 9, 12, 16 jugadores) con configuración automática',
                        'Agrupación inteligente de equipos según nivel',
                        'Programación automática de fixtures y cruces',
                        'Sistemas de eliminación: octavos, cuartos, semis y final',
                        'Bracket visual interactivo para seguimiento en vivo',
                        'Gestión completa de pagos e inscripciones',
                        'Resultados en tiempo real con actualización automática de posiciones',
                        'Notificaciones automáticas a jugadores en cada etapa',
                        'Dashboard con estadísticas de participación y pagos',
                        'Galería de fotos integrada para cada torneo'
                    ],
                    image: 'assets/images/torneos1.png',
                    conclusion: 'Torneos profesionales sin complicaciones. Todo queda centralizado y automatizado para que fluya de manera ágil y exitosa.'
                }
            },
            {
                id: 'reservas-canchas',
                title: 'Reservas de Canchas',
                icon: 'assets/images/3.png',
                content: {
                    title: 'Sistema de Reservas Online 🎾',
                    description: 'Permite que tus jugadores reserven canchas directamente desde la app móvil. Disponibilidad en tiempo real, calendario interactivo, confirmaciones automáticas y gestión completa de horarios desde el panel de administración.',
                    features: [
                        'Calendario interactivo con disponibilidad en tiempo real',
                        'Reserva desde app móvil en pocos segundos',
                        'Gestión de horarios y restricciones por cancha',
                        'Sistema de confirmación automática por email y app',
                        'Gestión de jugadores en cada reserva',
                        'Visualización de reservas futuras y pasadas',
                        'Integración con sistema de pagos para cobros automáticos',
                        'Notificaciones de recordatorio antes del partido',
                        'Reportes de uso de canchas y estadísticas de ocupación',
                        'Soporte para múltiples sedes y canchas'
                    ],
                    image: 'assets/images/matchlyadmin3.png',
                    conclusion: 'Elimina las llamadas telefónicas. Los jugadores reservan 24/7 y tú ves todo en tiempo real desde el admin.'
                }
            },
            {
                id: 'partidos-semanales',
                title: 'Partidos Semanales',
                icon: 'assets/images/4.png',
                content: {
                    title: 'Partidos Semanales (Weekday Matches) 📅',
                    description: 'Sistema innovador para partidos regulares entre semana. Los jugadores pueden crear partidos abiertos, unirse a otros o invitar compañeros. Gestión automática de horarios recurrentes y confirmaciones.',
                    features: [
                        'Creación de horarios recurrentes por cancha y día de semana',
                        'Partidos abiertos donde los jugadores pueden unirse',
                        'Sistema de búsqueda de compañero automático',
                        'Confirmación de asistencia antes de cada partido',
                        'Gestión de disponibilidad de slots y canchas',
                        'Notificaciones automáticas de nuevos partidos disponibles',
                        'Dashboard personalizado con mis partidos semanales',
                        'Historial completo de partidos jugados',
                        'Integración con sistema de categorías por nivel',
                        'Reportes de asistencia y participación'
                    ],
                    image: 'assets/images/jugador.png',
                    conclusion: 'Conecta a los jugadores y facilita que encuentren partidos regulares. Más actividad, más comunidad.'
                }
            },
            {
                id: 'pagos',
                title: 'Sistema de Pagos',
                icon: 'assets/images/1.png',
                content: {
                    title: 'Gestión de Pagos Integrada 💳',
                    description: 'Controla todos los pagos de inscripciones, reservas y servicios desde un solo lugar. Múltiples métodos de pago, seguimiento de estados, reportes de ingresos y reconciliación automática.',
                    features: [
                        'Seguimiento de pagos por torneo, liga o reserva',
                        'Múltiples métodos de pago: efectivo, transferencia, tarjeta, MercadoPago',
                        'Estados de pago: pendiente, pagado, fallido',
                        'Reportes detallados de ingresos por período',
                        'Dashboard financiero con métricas y gráficos',
                        'Exportación de reportes a Excel para contabilidad',
                        'Notificaciones automáticas de pagos recibidos',
                        'Gestión de pagos pendientes y recordatorios',
                        'Reconciliación automática con inscripciones',
                        'Historial completo de transacciones'
                    ],
                    image: 'assets/images/matchlyadmin1.png',
                    conclusion: 'Control financiero total. Sabés exactamente quién pagó, cuándo y por qué concepto, en tiempo real.'
                }
            },
            {
                id: 'kiosco-pos',
                title: 'Kiosco / POS',
                icon: 'assets/images/2.png',
                content: {
                    title: 'Punto de Venta para tu Club 🏪',
                    description: 'Sistema completo de punto de venta para gestionar productos y servicios del club. Control de inventario, categorías, tallas, múltiples métodos de pago y reportes de ventas detallados.',
                    features: [
                        'Gestión completa de productos con imágenes y descripciones',
                        'Control de inventario con alertas de stock bajo',
                        'Soporte para tallas y variantes (ropa, calzado)',
                        'Categorías personalizables para organización',
                        'Ventas rápidas con interfaz táctil optimizada',
                        'Múltiples métodos de pago integrados',
                        'Reportes de ventas diarios, semanales y mensuales',
                        'Análisis de productos más vendidos',
                        'Soporte multi-sede con inventarios independientes',
                        'Exportación de reportes para contabilidad'
                    ],
                    image: 'assets/images/matchlyadmin4.png',
                    conclusion: 'Gestiona toda la venta de productos del club desde una sola plataforma. Más control, más ingresos.'
                }
            },
            {
                id: 'galeria-sponsors',
                title: 'Galería y Sponsors',
                icon: 'assets/images/3.png',
                content: {
                    title: 'Galería de Fotos y Gestión de Sponsors 📸',
                    description: 'Comparte los mejores momentos de cada competencia y da visibilidad a tus sponsors. Sube fotos organizadas por evento, permite descargas y mantén la marca de tus sponsors siempre visible.',
                    features: [
                        'Galería de fotos organizada por liga, torneo o evento',
                        'Subida múltiple de imágenes desde el panel admin',
                        'Visualización en app móvil para todos los jugadores',
                        'Descarga de fotos de alta calidad',
                        'Gestión de sponsors con logos y branding',
                        'Visibilidad de sponsors en páginas principales de eventos',
                        'Captions y metadata para cada foto',
                        'Integración con redes sociales para compartir',
                        'Privacidad y permisos configurables',
                        'Storage ilimitado en la nube'
                    ],
                    image: 'assets/images/galeria.png',
                    conclusion: 'Crea comunidad y valor para tus sponsors. Los mejores momentos siempre a mano para tus jugadores.'
                }
            },
            {
                id: 'profesores',
                title: 'Gestión de Profesores',
                icon: 'assets/images/4.png',
                content: {
                    title: 'Directorio de Profesores e Instructores 👨‍🏫',
                    description: 'Mantén un directorio completo de todos los profesores del club. Perfiles con especialidades, horarios de disponibilidad, contacto directo y sistema de clases.',
                    features: [
                        'Perfiles completos de profesores con fotos y descripción',
                        'Especialidades: técnica, táctica, preparación física, etc.',
                        'Años de experiencia y certificaciones',
                        'Horarios de disponibilidad configurable',
                        'Contacto directo: WhatsApp, Instagram, email',
                        'Visualización en app móvil para jugadores',
                        'Sistema de búsqueda por especialidad',
                        'Integración con sistema de reservas para clases',
                        'Gestión desde panel admin',
                        'Estadísticas de popularidad y contacto'
                    ],
                    image: 'assets/images/jugador.png',
                    conclusion: 'Conecta a jugadores con profesores. Más clases, más desarrollo, más satisfacción en el club.'
                }
            },
            {
                id: 'panel-jugador',
                title: 'App para Jugadores',
                icon: 'assets/images/4.png',
                content: {
                    title: 'App Móvil Completa para Jugadores 📱',
                    description: 'Los jugadores tienen todo al alcance de su mano: inscripciones, resultados, reservas, partidos, galería y más. Interfaz intuitiva diseñada específicamente para la experiencia móvil.',
                    features: [
                        'Dashboard personalizado con próximo partido y estadísticas',
                        'Inscripción rápida a ligas y torneos desde el celular',
                        'Visualización de fixtures y calendario de partidos',
                        'Tablas de posiciones actualizadas en tiempo real',
                        'Reserva de canchas con calendario interactivo',
                        'Partidos semanales: crear, unirse o invitar compañeros',
                        'Galería de fotos de todos los eventos',
                        'Notificaciones push para recordatorios y actualizaciones',
                        'Información del clima actual (Montevideo)',
                        'Acceso rápido a profesores y contacto directo'
                    ],
                    image: 'assets/images/jugador.png',
                    conclusion: 'La mejor experiencia móvil para jugadores. Todo lo que necesitan, cuando lo necesitan, en un solo lugar.'
                }
            }
        ]
    },

    // Sección de Contacto
    CONTACT: {
        title: 'Contacto',
        subtitle: 'Hablemos sobre cómo <em>Matchly Sports</em> puede transformar tu club',
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
                    placeholder: 'Nombre completo',
                    required: true
                },
                email: {
                    placeholder: 'Email de contacto',
                    required: true
                },
                subject: {
                    placeholder: 'Asunto (opcional)',
                    required: false
                },
                message: {
                    placeholder: 'Cuéntanos sobre tu club y cómo podemos ayudarte...',
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
        copyright: '© 2025 Matchly Sports. Todos los derechos reservados.',
        credits: {
            text: 'Desarrollado con ❤️ para clubes de pádel en Uruguay',
            link: 'https://matchlysports.com',
            label: 'Matchly Sports'
        }
    }
};

// Exportar la configuración
export default CONFIG;
