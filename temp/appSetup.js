console.log('appSetup.js');

var domain = "https://rawgit.com/stajima/ramidx4_app/master/dist/";
var parentNode = document.getElementById("ramidx4_loader").parentNode;
var totalScripts = 5;
var scriptsLoaded = 0;


function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
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
    parentNode.insertBefore(script, document.getElementById("ramidx4_loader"));
}

loadScript(domain + 'inline.bundle.js', function () {
    scriptsLoaded++;
    loadMain();
});

loadScript(domain + 'polyfills.bundle.js', function () {
    scriptsLoaded++;
    loadMain();
});

loadScript(domain + 'styles.bundle.js', function () {
    scriptsLoaded++;
    loadMain();
});

loadScript(domain + 'vendor.bundle.js', function () {
    scriptsLoaded++;
    loadMain();
});

function loadMain() {
    if (scriptsLoaded === totalScripts) {
        loadScript(domain + 'main.bundle.js');
    }
}