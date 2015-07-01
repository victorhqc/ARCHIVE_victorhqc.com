angular.module('translations', ['pascalprecht.translate']);

angular.module('translations').config(function($translateProvider) {

    var lang = navigator.language || navigator.userLanguage;
    var lang_fixed = lang.match(/([a-z]+)/gi)[0];
    MessageFormat.locale["es_MX"] = function () {};
    MessageFormat.locale["en_US"] = function () {};

    $translateProvider.useMessageFormatInterpolation();
    switch(lang_fixed) {
        default:
        case 'en':
        $translateProvider.preferredLanguage('en_US');
        break;
        case 'es':
        $translateProvider.preferredLanguage('es_MX');
        break;
    }

    $translateProvider.useSanitizeValueStrategy('escaped');

    $translateProvider.translations('es_MX', {
        home: 'Inicio',
        about: 'Acerca de',
        title1: "Hola",
        sub1: "Mi nombre es Víctor Hugo Quiroz Castro",
        main1: "Soy un desarrollador de aplicaciones web con amplia experiencia. Construyo desarrollos geniales para la Web utilizando las tecnologías más actuales. ¿Necesitas un sitio o servicio en Internet? Seamos colaboradores.",
        phone: "Teléfono celular",
        title2: "Sitios responsivos.",
        sub2: "Para PC, Tablets y celulares.",
        main2: "No importa el tamaño de la pantalla en que veas la aplicacion o sitio web, siempre gozaras de la mejor experiencia de usuario, dando a tus clientes una herramienta eficiente y eficaz.",
        title3: "Aplicaciones robustas.",
        sub3: "Sin perder facilidad de uso.",
        main3_1: "Gracias a las ventajas del Internet, tus sistemas estarán siempre sincronizados, con acceso y uso incluso perdiendo la conexión. Sistemas rápidos y eficientes, usando tecnologías como AJAX que agilizan la velocidad de la plataforma.",
        legal: "Algunas partes del contenido son derechos reservados ©2013 victorhqc. Las fotografías están publicadas bajo creative commons, consulta",
        legal_2: "aquí.",
        legal_3: "Los logos son propiedad de",
        legal_4: "Github",
        legal_5: "y",
        legal_6: "W3C",
        jum_title: "Desarrollador Senior en Backend & Frontend",
        jum_description_1: "Soy un apasionado programador con la inalcanzable misión de lograr el código perfecto. He participado en numerosos proyectos de desarrollo, desde páginas de internet hasta avanzadas aplicaciones web.",
        jum_description_2: "Estudié en la Universidad La Salle la Ingeniería en Cibernética ",
        jum_desc_help_2: " - generación 2006-2011",
        jum_description_2_1: " en Chihuahua, Chih. México. Sin embargo mi especialidad está en la programación Web, comencé a hacer sitios web en 2008, con experiencia profesional desde el 2010.",
        jum_description_3: "Soy co fundador de ",
        jum_desc_help_3: "uVicate",
        jum_description_3_1: " una empresa dedicada al desarrollo de software en Internet, desempeñando el papel de director en el área de desarrollo.",
        technical_knowledge: "Conocimiento técnico",
        kn_title_1: "Diseño de bases de datos.",
        kn_sub_1: "Con MySQL, SQLite.",
        kb_main_1: "Desde realizar el modelo entidad-relación, diseñar el modelo relacional, escribir el código de sintáxis para crearla, cumpliendo con las reglas de normalización claro está. Hasta realizar consultas, funciones almacenadas, etc. y código avanzado de SQL.",
        kn_title_2: "Programación Server side ",
        kn_sub_2: "Utilizando PHP",
        kb_main_2: "Tengo experiencia con la programación orientada a objetos en este lenguaje. He realizado una gran cantidad de librerías y API's en diferentes proyectos y sistemas.",
        kn_title_3: "Programación Client side ",
        kn_sub_3: "Utilizando JavaScript, HTML y CSS",
        kn_main_3: "Utilizando los patrones de diseño más modernos el máximo rendimiento en los desarrollos. Además de tener experiencia con las tecnologías de HTML5 como IndexedDB y Web Sockets. Integración de servicios de terceros como Google, Dropbox, Facebook, etc.",
        kn_title_4: "Códigos elegantes",
        kn_sub_4: " y abiertos",
        kn_main_4: "El código debe ser fácil de leer, mantener y expander. He desarrollado algunas APIs que se utilizán por diferentes desarrolladores en el mundo, ¡Revisa mis repositorios de código abierto en ",
        kn_main_4_1: "Github",
        kn_main_4_2: "! Si eres un programador como yo, me gustaría conocer tu trabajo también.",
        kn_title_5: "Mi no tan especialidad ",
        kn_sub_5: "Programación con Python",
        kn_main_5: "En el 2012 Escribí una aplicación híbrida escrita en Python y tecnologías Web. Para Linux, específicamente para la distribución de Ubuntu. Y aunque nunca la publiqué, me inspiró para realizar el API \"WebApp\" y mi proyecto \"ExpMan\".",
        contact_me: "Contáctame",
        contact_phone: "Teléfono",
        contact_email: "Correo electrónico",
        about_social: "Redes sociales",
        about_location: "Ubicación",
        curiosities: "Datos curiosos",
        feature_1: "8 Horas de programación",
        featurem_1: "Diarias",
        feature_2: "+10,000 Líneas de código",
        featurem_2: "Mensuales",
        feature_3: "2 Horas leyendo",
        featurem_3:"Por día",
        feature_4: "10 tazas de café",
        featurem_4: "Por semana",
        feature_5: "Dos partidas de League of legends",
        featurem_5: "Al día"
    });

    $translateProvider.translations('en_US', {

    });
});
