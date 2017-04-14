console.log('appSetup.js');

$(document).ready(init());

function init() {
    var domain = "https://rawgit.com/stajima/ng-admin/master/dist";

    var scriptElement = document.createElement("link");
    scriptElement.rel = "stylesheet";
    scriptElement.href = domain + "/initial.css";
    document.getElementsByTagName('head')[0].appendChild(scriptElement);

    var polyDone = false;
    var vendorDone = false;

    loadPolyBundle();


    function loadPolyBundle() {
        console.log('getting ployfills bundle');
        ramidx4.loadScript(domain + '/polyfills.bundle.js', function () {
            console.log('ployfills bundle loaded');
            polyDone = true;
            loadVendorBundle();
        });
    }

    function loadVendorBundle() {
        console.log('getting vendor bundle');
        ramidx4.loadScript(domain + '/vendor.bundle.js', function () {
            console.log('vendor bundle loaded');
            vendorDone = true;
            loadMain();
        });
    }

    function loadMain() {
        console.log('getting main bundle');
        if (vendorDone && polyDone) {
            ramidx4.loadScript(domain + '/main.bundle.js', function () {
                console.log('main bundle added');
            });
        }
    }
}