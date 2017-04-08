console.log('loader.js')
this.loadScript = function (url, callback) {
    var script = document.createElement("script")
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
    document.body.insertBefore(script, document.getElementById("ramidx4_loader"));
}

loadScript("https://code.jquery.com/jquery-3.2.1.min.js", function () {
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
    document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));
});

// var scriptElement = document.createElement("script");
// scriptElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
// document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));

// var scriptElement = document.createElement("script");
// scriptElement.src = "https://stajima.github.io/realestateclient/temp/appSetup.js";
// document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));