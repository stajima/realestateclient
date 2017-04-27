console.log('appSetup.js');

(function () {
    var domain = "https://rawgit.com/stajima/ng-admin/master/dist";
    var parentNode = document.getElementById("ramidx4_loader").parentNode;

    var inlineElement = document.createElement("script");
    inlineElement.src = domain + '/inline.bundle.js';

    var polyElement = document.createElement("script");
    polyElement.src = domain + '/polyfills.bundle.js';

    var stylesElement = document.createElement("script");
    stylesElement.src = domain + '/styles.bundle.js';

    var vendorElement = document.createElement("script");
    vendorElement.src = domain + '/vendor.bundle.js';

    var mainElement = document.createElement("script");
    mainElement.src = domain + '/main.bundle.js';


    parentNode.insertBefore(inlineElement, document.getElementById("ramidx4_loader"));
    parentNode.insertBefore(polyElement, document.getElementById("ramidx4_loader"));
    parentNode.insertBefore(stylesElement, document.getElementById("ramidx4_loader"));
    parentNode.insertBefore(vendorElement, document.getElementById("ramidx4_loader"));
    parentNode.insertBefore(mainElement, document.getElementById("ramidx4_loader"));
})();