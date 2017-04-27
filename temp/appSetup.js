console.log('appSetup.js');

var domain = "https://rawgit.com/stajima/ramidx4_app/master/dist/";
var parentNode = document.getElementById("ramidx4_loader").parentNode;
var minorScripts = 4;
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
    console.log('inline done');
    scriptsLoaded++;
    loadMain();
});

loadScript(domain + 'polyfills.bundle.js', function () {
    console.log('polyfills done');
    scriptsLoaded++;
    loadMain();
});

loadScript(domain + 'styles.bundle.js', function () {
    console.log('styles done');
    scriptsLoaded++;
    loadMain();
});

loadScript(domain + 'vendor.bundle.js', function () {
    console.log('vendor done');
    scriptsLoaded++;
    loadMain();
});

function loadMain() {
    if (scriptsLoaded === minorScripts) {
        loadScript(domain + 'main.bundle.js', function () {
            console.log('main done');
        });
    }
}