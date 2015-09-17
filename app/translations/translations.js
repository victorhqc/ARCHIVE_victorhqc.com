angular.module('translations', ['pascalprecht.translate']);

angular.module('translations').config(function($translateProvider) {

    $translateProvider.useMessageFormatInterpolation();
    MessageFormat.locale["es"] = function () {};
    MessageFormat.locale["en"] = function () {};

    $translateProvider.determinePreferredLanguage(function () {
        var lang = navigator.language || navigator.userLanguage;
        var preferredLangKey = lang.match(/([a-z]+)/gi)[0];
        return preferredLangKey;
    });

    //$translateProvider.determinePreferredLanguage();

    $translateProvider.useSanitizeValueStrategy('escaped');

    $translateProvider.translations('es', {
        home: 'Inicio',
        about: 'Acerca de',
        projects: 'Proyectos',
        blog: 'Blog',
        title1: "Hola",
        sub1: "Mi nombre es Víctor Hugo Quiroz Castro",
        main1: "Soy un desarrollador de aplicaciones web con amplia experiencia. Construyo desarrollos geniales para la Web utilizando las tecnologías más actuales. ¿Necesitas un sitio o servicio en Internet? Seamos colaboradores.",
        title2: "Sitios responsivos.",
        sub2: "Para PC, Tablets y celulares.",
        main2: "No importa el tamaño de la pantalla en que veas la aplicacion o sitio web, siempre gozaras de la mejor experiencia de usuario, dando a tus clientes una herramienta eficiente y eficaz.",
        title3: "Desarrollo de APIs",
        sub3: "RESTful.",
        main3_1: "APIs modernas utilizando servicios modernos como OAuth2 para hacer numerosas aplicaciones como lo hacen los grandes servicios web.",
        legal: "Algunas partes del contenido son derechos reservados ©2013 victorhqc. Las fotografías están publicadas bajo creative commons, consulta",
        legal_2: "aquí.",
        legal_3: "Los logos son propiedad de",
        legal_5: "y",
        jum_title: "Desarrollador Senior en Backend & Frontend",
        jum_description_1: "Soy un apasionado programador con la inalcanzable misión de lograr el código perfecto. He participado en numerosos proyectos de desarrollo, desde páginas de internet hasta avanzadas aplicaciones web.",
        jum_description_2: "Estudié en la Universidad La Salle la Ingeniería en Cibernética ",
        jum_desc_help_2: " - generación 2006-2011",
        jum_description_2_1: " en Chihuahua, Chih. México. Sin embargo mi especialidad está en la programación Web, comencé a hacer sitios web en 2008, con experiencia profesional desde el 2010.",
        jum_description_3: "Soy co fundador de ",
        jum_desc_help_3: "uVicate",
        jum_description_3_1: " una empresa dedicada al desarrollo de software en Internet, desempeñando el papel de director en el área de desarrollo.",
        technical_knowledge: "Conocimiento técnico",
        skill_mysql: "Diseño de bases de datos.",
        skill_mysql_subtitle: "Con MySQL, SQLite.",
        skill_mysql_message: "Desde realizar el modelo entidad-relación, diseñar el modelo relacional, escribir el código de sintáxis para crearla, cumpliendo con las reglas de normalización claro está. Hasta realizar consultas, funciones almacenadas, etc. y código avanzado de SQL.",
        skill_backend: "Programación Server side ",
        skill_backend_subtitle: "Utilizando PHP y NodeJS",
        skill_backend_message: "Mi especialidad está en el lado del servidor, escribiendo código y algoritmos abstractos. He escrito una gran cantidad de librerías y API's en diferentes proyectos y sistemas. Algunas cosas con las que he trabajado:",
        restful: "APIs RESTful",
        websockets: "WebSockets",
        laravel: "Laravel",
        mean: 'MEAN.JS',
        loopback: 'LoopBack',
        online_payments: 'Pagos en línea',
        skill_backend_oauth2: "Servidor OAuth2 (Propio)",
        skill_frontend: "Programación Client side ",
        skill_frontend_subtitle: "Utilizando JavaScript",
        skill_frontend_message: "Definitivamente mi lenguaje favorito es éste lenguaje debido a su gran dinamismo y libertad que ofrece. puedo traducir cualquier diseño a código, algunas de las tecnologías con las que estoy familiarizado:",
        angularjs: 'Angular JS',
        gulp: 'Gulp',
        grunt: 'Grunt',
        html5: 'HTML5',
        bootstrap: 'Bootstap',
        bower: 'Bower',
        polymer: 'Polymer',
        skill_linux: "Servidores",
        skill_linux_subtitle: "Linux",
        skill_linux_message: "Desde hace años mi computadora ha utilizado Ubuntu como sistema operativo principal, dando como resultado un gran conocimiento técnico en el mantenimiento y uso de sistemas Linux",
        skill_github: "Códigos elegantes",
        skill_github_subtitle: " y abiertos",
        skill_github_message: 'El código debe ser fácil de leer, mantener y expander. He desarrollado algunas APIs que se utilizán por diferentes desarrolladores en el mundo, ¡Revisa mis repositorios de código abierto Github! Si eres un programador como yo, me gustaría conocer tu trabajo también.',
        skill_noskill: "Mi no tan especialidad ",
        skill_noskill_subtitle: "Python",
        skill_noskill_message: "En el 2012 Escribí una aplicación híbrida escrita en Python y tecnologías Web. Para Linux, específicamente para la distribución de Ubuntu. Y aunque nunca la publiqué, me inspiró para realizar el API \"WebApp\" y mi proyecto \"ExpMan\".",
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
        featurem_5: "Al día",
        Capvital: 'Capvital',
        capvital_subtitle: 'Core financiero',
        capvital_message: 'Contribuí con el diseño de la base de datos, así como escribiendo la mayoría del código del lado del servidor.',
        Pilot: 'Pilot',
        pilot_subtitle: 'Planificación de recursos empresariales',
        pilot_message: 'Contribuí con el diseño de la base de datos, así como escribiendo el código del lado del servidor.',
        Pippal: 'Pippal',
        pippal_subtitle: 'Plataforma educativa',
        pippal_message: 'Contribuí con el diseño de la base de datos, así como escribiendo el código del lado del servidor.',
        my_repositories: 'Mis repositorios',
        language: 'Lenguaje'
    });

    $translateProvider.translations('en', {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        blog: 'Blog',
        title1: "Hello",
        sub1: "My name is Víctor Hugo Quiroz Castro",
        main1: "I'm a Web application developer with wide experience. I build great apps for the web using the newest technologies. Need a webservice or website? I would like to collaborate with you.",
        title2: "Responsive sites.",
        sub2: "For computers, Tablets and phones.",
        main2: "Regardless of the screen size in which you use the website or application, you'll get the best user experience, giving your clients an efficent and useful tool.",
        title3: "RESTful APIs",
        sub3: "Development.",
        main3_1: "Modern APIs using new services like OAuth2 to create multiple applications like the big web services do.",
        legal: "Some parts of the content are rights reserved ©2013 victorhqc. The photographies are published under creative commons, read ",
        legal_2: "here.",
        legal_3: "The logos are property of ",
        legal_5: "and",
        jum_title: "Senior Backend & Frontend Developer",
        jum_description_1: "I'm a passionate programmer with the unreachable quest to achieve the perfect code. I've participated in many developing projects, from websites to advanced web applications.",
        jum_description_2: "Studied in La Salle University the Cybernetics Engineering ",
        jum_desc_help_2: " - 2006-2011 promotion",
        jum_description_2_1: " in Chihuahua, Chih. Mexico. However, my specialty is the Web Programming, I started building websites back in 2008, with professional experience since 2010.",
        jum_description_3: "I'm cofounder of",
        jum_desc_help_3: "uVicate",
        jum_description_3_1: " a company dedicated to the Internet software development, playing the role of director in the development area.",
        technical_knowledge: "Technical knowledge",
        skill_mysql: "Database design",
        skill_mysql_subtitle: " With MySQL, SQLite.",
        skill_mysql_message: "From with the entity-relationship model, design the relational model, writing the sintax code for creating it, satisfying the normalization rules of course. To making queries, stored functions, etc. And advanced SQL code.",
        skill_backend: "Serverside programming ",
        skill_backend_subtitle: "using PHP and NodeJS",
        skill_backend_message: "Mi specialty is in the server side, writing abstract code and algorythms. I've written a great amount of libraries and APIs in different projects and systems. Some things I've worked with:.",
        restful: "APIs RESTful",
        websockets: "WebSockets",
        laravel: "Laravel",
        mean: 'MEAN.JS',
        loopback: 'LoopBack',
        online_payments: 'Online payments',
        skill_backend_oauth2: "OAuth2 server (Owned)",
        skill_frontend: "Clientside programming ",
        skill_frontend_subtitle: "using JavaScript",
        skill_frontend_message: "Definitely my favorite language due its great dynamism and freedom it offers. I can translate any design in code, some of the technologies I know are:",
        angularjs: "Angular JS",
        grunt: "Grunt",
        gulp: 'Gulp',
        html5: "HTML5",
        bootstrap: 'Bootstap',
        bower: 'Bower',
        polymer: 'Polymer',
        skill_linux: "Linux",
        skill_linux_subtitle: "Servers",
        skill_linux_message: "Since years ago my computer has been using Ubuntu as main operative system, giving as result a great technical knowledge y maintenance and use in Linux systems",
        skill_github: "Elegant codes",
        skill_github_subtitle: " and open",
        skill_github_message: "The code must be easy to read, maintain and expand. I've developed some APIs that are used by different developers around the world, Check out my open source repositories in Github! If you're a programmer like me, I'd like to know your work to.",
        skill_noskill: "My not so specialty ",
        skill_noskill_subtitle: "Python",
        skill_noskill_message: "In 2012 I wrote a hybrid code in Python and Web technologies. For Linux, specifically for the Ubuntu distribution. Although I never published it, inspired me for realizing the \"WebApp\" API and my \"ExpMan\" project.",
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
        featurem_5: "Per day",
        Capvital: 'Capvital',
        capvital_subtitle: 'Financial core',
        capvital_message: 'I contributed with the database design, as well as writing most of the server side code.',
        Pilot: 'Pilot',
        pilot_subtitle: 'Enterprise Resource Planning',
        pilot_message: 'I contributed with the databse design, as well as writing the server side code.',
        Pippal: 'Pippal',
        pippal_subtitle: 'Education platform',
        pippal_message: 'I contributed with the database design, as well as writing the server side code.',
        my_repositories: 'My repositories',
        language: 'Language'
    });
});

angular.module('translations').controller('Languages', function($scope, $translate){
    $scope.translate = function(lang)
    {
         $translate.use(lang);
    };
});
