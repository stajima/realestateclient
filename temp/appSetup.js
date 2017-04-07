console.log('appSetup.js');
//TODO change to use loader style load
function loadScript(url, callback) {
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = url;
    if (callback) {
        scriptElement.onload = callback;
    }
    document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
}

var chunksLoaded = 0;
var totalChunks = 10;
var vendorDone = false;
var polyDone = false;
var domain = "https://rawgit.com/stajima/ng-admin/master/dist";
function loadChunks() {
    if (vendorDone && polyDone) {
        loadScript(domain + '/0.chunk.js', function () {
            console.log('chunk 0 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/1.chunk.js', function () {
            console.log('chunk 1 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/2.chunk.js', function () {
            console.log('chunk 2 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/3.chunk.js', function () {
            console.log('chunk 3 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/4.chunk.js', function () {
            console.log('chunk 4 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/5.chunk.js', function () {
            console.log('chunk 5 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/6.chunk.js', function () {
            console.log('chunk 6 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/7.chunk.js', function () {
            console.log('chunk 7 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/8.chunk.js', function () {
            console.log('chunk 8 loaded');
            chunksLoaded++;
            loadMain();
        });
        loadScript(domain + '/9.chunk.js', function () {
            console.log('chunk 9 loaded');
            chunksLoaded++;
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
        loadChunks();
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
        loadChunks();
    });
};

function loadMain() {
    if (chunksLoaded === totalChunks) {
        var scriptElement = document.createElement("script");
        scriptElement.src = (domain + '/main.bundle.js');
        document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
        console.log('main bundle added');
    }
};
