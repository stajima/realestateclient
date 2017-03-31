function gotApp() {
    console.log("got app");
}

var scriptElement = document.createElement("script");
scriptElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));

var scriptElement = document.createElement("script");
scriptElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
scriptElement.onload = gotApp;
document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));