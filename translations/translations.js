angular.module('translations', ['pascalprecht.translate']);

angular.module('translations').config(function($translateProvider) {

    MessageFormat.locale["es_MX"] = function () {};
    MessageFormat.locale["en_US"] = function () {};

    $translateProvider.useMessageFormatInterpolation();
    $translateProvider.preferredLanguage('es_MX');
    $translateProvider.translations('es_MX', {
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
        legal_6: "W3C"
    });

    $translateProvider.translations('en_US', {

    });
});
