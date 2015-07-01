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
        home: 'Home',
        about: 'About',
        title1: "Hello",
        sub1: "My name is Víctor Hugo Quiroz Castro",
        main1: "I'm a Web application developer with wide experience. I build great apps for the web using the newest technologies. Need a webservice or website? I would like to collaborate with you.",
        phone: "Cellphone",
        title2: "Responsive sites.",
        sub2: "For computers, Tablets and phones.",
        main2: "Regardless of the screen size in which you use the website or application, you'll get the best user experience, giving your clients an efficent and useful tool.",
        title3: "Robust applications.",
        sub3: "Without losing usability.",
        main3_1: "Thanks to the advantages of the web, your systems will be always synchronized, with access and use even losing the Internet connection. Quick and efficent systems, using technologies like AJAX that speeed up the speed of the platform.",
        legal: "Some parts of the content are rights reserved ©2013 victorhqc. The photographies are published under creative commons, read ",
        legal_2: "here.",
        legal_3: "The logos are property of ",
        legal_4: "Github",
        legal_5: "and",
        legal_6: "W3C",
        jum_title: "Senior Backend & Frontend Developer",
        jum_description_1: "I'm a passionate programmer with the unreachable quest to achieve the perfect code. I've participated in many developing projects, from websites to advanced web applications.",
        jum_description_2: "Studied in La Salle University the Cybernetics Engineering ",
        jum_desc_help_2: " - 2006-2011 promotion",
        jum_description_2_1: " in Chihuahua, Chih. Mexico. However, my specialty is the Web Programming, I started building websites back in 2008, with professional experience since 2010.",
        jum_description_3: "I'm cofounder of",
        jum_desc_help_3: "uVicate",
        jum_description_3_1: " a company dedicated to the Internet software development, playing the role of director in the development area.",
        technical_knowledge: "Technical knowledge",
        kn_title_1: "Database design",
        kn_sub_1: " With MySQL, SQLite.",
        kb_main_1: "From with the entity-relationship model, design the relational model, writing the sintax code for creating it, satisfying the normalization rules of course. To making queries, stored functions, etc. And advanced SQL code.",
        kn_title_2: "Serverside programming ",
        kn_sub_2: "using PHP",
        kb_main_2: "I have experience with object oriented programming in this language. I've realized a great amount of libraries and APIs in different projects and systems.",
        kn_title_3: "Clientside programming ",
        kn_sub_3: "using JavaScript, HTML and CSS",
        kn_main_3: "Using newest design patterns giving the maximum performance in the application. Also having experience with HTML5 technologies like IndexedDB and Web Sockets. Integration with 3rd parties like Google, Dropbox, Facebook, etc.",
        kn_title_4: "Elegant codes",
        kn_sub_4: " and open",
        kn_main_4: "The code must be easy to read, maintain and expand. I've developed some APIs that are used by different developers around the world, Check out my open source repositories in",
        kn_main_4_1: "Github",
        kn_main_4_2: "! If you're a programmer like me, I'd like to know your work to.",
        kn_title_5: "My not so specialty ",
        kn_sub_5: "Python programming",
        kn_main_5: "In 2012 I wrote a hybrid code in Python and Web technologies. For Linux, specifically for the Ubuntu distribution. Although I never published it, inspired me for realizing the \"WebApp\" API and my \"ExpMan\" project.",
        contact_me: "Contact me",
        contact_phone: "Phone",
        contact_email: "Email",
        about_social: "Social networks",
        about_location: "Location",
        curiosities: "Fun Facts",
        feature_1: "8 Hours programming",
        featurem_1: "Daily",
        feature_2: "+10,000 Code lines",
        featurem_2: "Monthly",
        feature_3: "2 Hours reading",
        featurem_3:"Per day",
        feature_4: "10 cups of coffee",
        featurem_4: "Per week",
        feature_5: "Two games of League of legends",
        featurem_5: "Per day"
    });
});
