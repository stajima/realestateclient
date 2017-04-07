console.log('appSetup.js');
function loadScript(url, callback) {
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = url;
    if (callback) {
        scriptElement.onload = callback;
    }
    document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
}

loadScript("https://rawgit.com/stajima/ng-admin/master/dist/polyfills.dll.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/polyfills.bundle.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/vendor.dll.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/vendor.bundle.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/0.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/1.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/2.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/3.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/4.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/5.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/6.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/7.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/8.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/9.chunk.js");
loadScript("https://rawgit.com/stajima/ng-admin/master/dist/main.bundle.js");