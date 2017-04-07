console.log('loader.js')
var scriptElement = document.createElement("script");
scriptElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
scriptElement.onload = function () {
    // var scriptElement = document.createElement("script");
    // scriptElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
    // document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
}
document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));