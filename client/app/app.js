angular
    .module("pi.play", [
        "ui.router"
    ])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true)
    });