console.log('Start of appSetup.js');
function loadScript(url, callback) {

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

var scriptsLoaded = 0;
var totalScripts = 4;
(function init() {
    var domain = "https://cdn.rawgit.com/stajima/ng-admin/c82c5030";

    loadScript(domain + '/node_modules/core-js/client/shim.min.js', function () {
        console.log('shim loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/node_modules/zone.js/dist/zone.js', function () {
        console.log('zone loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/node_modules/reflect-metadata/Reflect.js', function () {
        console.log('reflect loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/node_modules/systemjs/dist/system.src.js', function () {
        console.log('systemjs loaded');
        scriptsLoaded++;
        launch();
    });
}());

var launch = function () {
    if (scriptsLoaded === totalScripts) {
        loadScript('https://rawgit.com/stajima/ng-admin/master/dist/systemjs.config.js', function () {
            console.log('config.js loaded');
            console.log('Launching app');
            System.import('app').catch(console.error.bind(console));
        });
    }
};
