console.log('appSetup.js');

var domain = "https://rawgit.com/stajima/ng-admin/master/dist";

var scriptElement = document.createElement("link");
scriptElement.rel = "stylesheet";
scriptElement.href = domain + "/initial.css";
document.getElementsByTagName('head')[0].appendChild(scriptElement);

var polyElement = document.createElement("script");
polyElement.src = domain + '/polyfills.bundle.js';
// polyElement.defer = true;
var parentNode = document.getElementById("ramidx4_loader").parentNode;

var vendorElement = document.createElement("script");
vendorElement.src = domain + '/vendor.bundle.js';
// vendorElement.defer = true;
var parentNode = document.getElementById("ramidx4_loader").parentNode;

var mainElement = document.createElement("script");
mainElement.src = domain + '/main.bundle.js';
// mainElement.defer = true;
var parentNode = document.getElementById("ramidx4_loader").parentNode;


parentNode.insertBefore(polyElement, document.getElementById("ramidx4_loader"));
parentNode.insertBefore(vendorElement, document.getElementById("ramidx4_loader"));
parentNode.insertBefore(mainElement, document.getElementById("ramidx4_loader"));
