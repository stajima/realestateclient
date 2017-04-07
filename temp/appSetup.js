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
var totalScripts = 13;
var domain = "https://rawgit.com/stajima/ng-admin/master/dist";
function scripts() {
    loadScript(domain + '/polyfills.dll.js', function () {
        console.log('polyfills dll loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/vendor.dll.js', function () {
        console.log('vendor dll loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/vendor.bundle.js', function () {
        console.log('vendor bundle loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/0.chunk.js', function () {
        console.log('chunk 0 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/1.chunk.js', function () {
        console.log('chunk 1 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/2.chunk.js', function () {
        console.log('chunk 2 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/3.chunk.js', function () {
        console.log('chunk 3 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/4.chunk.js', function () {
        console.log('chunk 4 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/5.chunk.js', function () {
        console.log('chunk 5 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/6.chunk.js', function () {
        console.log('chunk 6 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/7.chunk.js', function () {
        console.log('chunk 7 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/8.chunk.js', function () {
        console.log('chunk 8 loaded');
        scriptsLoaded++;
        launch();
    });
    loadScript(domain + '/9.chunk.js', function () {
        console.log('chunk 9 loaded');
        scriptsLoaded++;
        launch();
    });
};

(function init() {
    loadScript(domain + '/polyfills.bundle.js', function () {
        console.log('init ployfills bundle loaded');
        scripts();
    });
})();

var launch = function () {
    if (scriptsLoaded === totalScripts) {
        loadScript(domain + '/main.bundle.js', function () {
            console.log('main bundle loaded');
        });
    }
};
