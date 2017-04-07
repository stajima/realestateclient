console.log('loader.js')
var scriptElement = document.createElement("script");
scriptElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
document.head.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));

var scriptElement = document.createElement("script");
scriptElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
// scriptElement.onload = gotApp;
document.head.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));