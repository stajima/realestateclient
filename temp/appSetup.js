console.log('appSetup.js');
//TODO change to use loader style load
function loadScript(url, callback) {
    var scriptElement = document.createElement("script");
    scriptElement.src = url;
    scriptElement.onload = callback || null;
    document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
}

var scriptsLoaded = 0;
var totalScripts = 10;
var vendorDone = false;
var polyDone = false;
var domain = "https://rawgit.com/stajima/ng-admin/master/dist";
function scripts() {
    if (vendorDone && polyDone) {
        loadScript(domain + '/0.chunk.js', function () {
            console.log('chunk 0 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/1.chunk.js', function () {
            console.log('chunk 1 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/2.chunk.js', function () {
            console.log('chunk 2 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/3.chunk.js', function () {
            console.log('chunk 3 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/4.chunk.js', function () {
            console.log('chunk 4 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/5.chunk.js', function () {
            console.log('chunk 5 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/6.chunk.js', function () {
            console.log('chunk 6 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/7.chunk.js', function () {
            console.log('chunk 7 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/8.chunk.js', function () {
            console.log('chunk 8 loaded');
            scriptsLoaded++;
            loadMain();
        });
        loadScript(domain + '/9.chunk.js', function () {
            console.log('chunk 9 loaded');
            scriptsLoaded++;
            loadMain();
        });
    }
};

(function init() {
    loadPolyDll();
    loadVendorDll();
})();

function loadPolyDll() {
    loadScript(domain + '/polyfills.dll.js', function () {
        console.log('polyfills dll loaded');
        loadPolyBundle();
    });
};

function loadPolyBundle() {
    loadScript(domain + '/polyfills.bundle.js', function () {
        console.log('ployfills bundle loaded');
        polyDone = true;
        scripts();
    });
};

function loadVendorDll() {
    loadScript(domain + '/vendor.dll.js', function () {
        console.log('vendor dll loaded');
        loadVendorBundle();
    });
};

function loadVendorBundle() {
    loadScript(domain + '/vendor.bundle.js', function () {
        console.log('vendor bundle loaded');
        vendorDone = true;
        scripts();
    });
};

function loadMain() {
    if (scriptsLoaded === totalScripts) {
        // loadScript(domain + '/main.bundle.js', function () {
        //     console.log('main bundle loaded');
        // });
        var scriptElement = document.createElement("script");
        scriptElement.src = (domain + '/main.bundle.js');
        scriptElement.defer = true;
        document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
        console.log('main bundle added');
    }
};
