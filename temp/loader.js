console.log('loader.js')
ramidx4.scriptElement = document.createElement("script");
ramidx4.scriptElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));

ramidx4.scriptElement = document.createElement("script");
ramidx4.scriptElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));