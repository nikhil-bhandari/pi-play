var express = require("express");
var path = require('path');
var Gpio = require('onoff').Gpio;

module.exports = function (app) {
    app.use(express.static(__dirname + "/../client/"));

    app.get("/api/pins/:pin/:output", function (req, res) {
        if (req.params.output == "on") {
            var relay = new Gpio(req.params.pin, 'out');
        } else {
            var relay = new Gpio(req.params.pin, 'in');
        }
        res
            .status(200)
            .json({ok: true, pin: req.params.pin, output: req.params.output})
    })
};