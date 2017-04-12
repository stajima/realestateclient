console.log('appSetup.js');

$(document).ready(function init() {
    var scriptElement = document.createElement("link");
    scriptElement.rel = "stylesheet";
    scriptElement.href = "https://rawgit.com/stajima/ng-admin/master/dist/initial.css";
    document.getElementsByTagName('head')[0].appendChild(scriptElement);

    var domain = "https://rawgit.com/stajima/ng-admin/master/dist";

    ramidx4.loadScript(domain + '/polyfills.bundle.js', function () {
        console.log('ployfills bundle loaded');
    });

    ramidx4.loadScript(domain + '/vendor.bundle.js', function () {
        console.log('vendor bundle loaded');
    });

    ramidx4.loadScript(domain + '/main.bundle.js', function () {
        console.log('main bundle added');
    };
});