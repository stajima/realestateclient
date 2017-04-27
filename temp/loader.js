console.log('loader.js');

var parentNode = document.getElementById("ramidx4_loader").parentNode;

var jqueryElement = document.createElement("script");
jqueryElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
parentNode.insertBefore(jqueryElement, document.getElementById("ramidx4_loader"));

var appSetupElement = document.createElement("script");
appSetupElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
parentNode.insertBefore(appSetupElement, document.getElementById("ramidx4_loader"));
