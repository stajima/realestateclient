console.log('appSetup.js');
function loadScript(url) {
    var scriptElement = document.createElement("script");
    scriptElement.src = url;
    document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
}

var scriptsLoaded = 0;
var totalScripts = 14;
var domain = "https://rawgit.com/stajima/ng-admin/master/dist";
(function init() {
    loadScript(domain + '/polyfills.dll.js');
    loadScript(domain + '/vendor.dll.js');
    loadScript(domain + '/polyfills.bundle.js');
    loadScript(domain + '/vendor.bundle.js');
    loadScript(domain + '/0.chunk.js');
    loadScript(domain + '/1.chunk.js');
    loadScript(domain + '/2.chunk.js');
    loadScript(domain + '/3.chunk.js');
    loadScript(domain + '/4.chunk.js');
    loadScript(domain + '/5.chunk.js');
    loadScript(domain + '/6.chunk.js');
    loadScript(domain + '/7.chunk.js');
    loadScript(domain + '/8.chunk.js');
    loadScript(domain + '/9.chunk.js');
}());

var launch = function () {
    if (scriptsLoaded === totalScripts) {
        loadScript(domain + '/main.bundle.js');
    }
};
