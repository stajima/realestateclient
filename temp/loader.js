function getApp() {
    console.log("getting app");
    var payload = {Domain: ramidx4.Domain, DBID: ramidx4.DBID};
    var appEndpoint = "https://localhost:8080/api/auth/app";
    console.log(appEndpoint, payload);
    $.post(appEndpoint, payload)
        .done(function postDone(response) {
            console.log("POST done");
        });
}

var scriptElement = document.createElement("script");
scriptElement.src = "https://code.jquery.com/jquery-3.2.1.min.js";
scriptElement.onload = getApp;
document.body.insertBefore(scriptElement, document.getElementById("ramidx4_loader"));