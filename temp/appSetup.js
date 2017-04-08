console.log('appSetup.js');
console.log(ramidx4);
var chunksLoaded = 0;
var totalChunks = 10;
var vendorDone = false;
var polyDone = false;
var domain = "https://rawgit.com/stajima/ng-admin/master/dist";
function loadChunks() {
    if (vendorDone && polyDone) {
        ramidx4.loadScript(domain + '/0.chunk.js', function () {
            console.log('chunk 0 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/1.chunk.js', function () {
            console.log('chunk 1 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/2.chunk.js', function () {
            console.log('chunk 2 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/3.chunk.js', function () {
            console.log('chunk 3 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/4.chunk.js', function () {
            console.log('chunk 4 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/5.chunk.js', function () {
            console.log('chunk 5 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/6.chunk.js', function () {
            console.log('chunk 6 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/7.chunk.js', function () {
            console.log('chunk 7 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/8.chunk.js', function () {
            console.log('chunk 8 loaded');
            chunksLoaded++;
            loadMain();
        });
        ramidx4.loadScript(domain + '/9.chunk.js', function () {
            console.log('chunk 9 loaded');
            chunksLoaded++;
            loadMain();
        });
    }
};

function loadPolyDll() {
    ramidx4.loadScript(domain + '/polyfills.dll.js', function () {
        console.log('polyfills dll loaded');
        loadPolyBundle();
    });
};

function loadPolyBundle() {
    ramidx4.loadScript(domain + '/polyfills.bundle.js', function () {
        console.log('ployfills bundle loaded');
        polyDone = true;
        loadChunks();
    });
};

function loadVendorDll() {
    ramidx4.loadScript(domain + '/vendor.dll.js', function () {
        console.log('vendor dll loaded');
        loadVendorBundle();
    });
};

function loadVendorBundle() {
    ramidx4.loadScript(domain + '/vendor.bundle.js', function () {
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

$(document).ready(function init() {
    var scriptElement = document.createElement("link");
    scriptElement.rel = "stylesheet";
    scriptElement.href = "https://rawgit.com/stajima/ng-admin/master/dist/initial.css";
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
    loadPolyDll();
    loadVendorDll();
});