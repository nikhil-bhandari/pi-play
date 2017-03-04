angular
    .module("pi.play")
    .controller("HomeCtrl", function ($http) {
        var self = this;

        self.pins = [
            {number: 2, mode: 0},
            {number: 3, mode: 0},
            {number: 4, mode: 0},
            {number: 8, mode: 0},
            {number: 9, mode: 0},
            {number: 10, mode: 0},
            {number: 11, mode: 0},
            {number: 14, mode: 0},
            {number: 15, mode: 0},
            {number: 17, mode: 0},
            {number: 18, mode: 0},
            {number: 22, mode: 0},
            {number: 23, mode: 0},
            {number: 24, mode: 0},
            {number: 25, mode: 0},
            {number: 27, mode: 0}
        ];

        self.press = function (pin) {
            pin.mode = +!pin.mode;
            var url = ["/api/pins", pin.number, pin.mode ? "on" : "off"].join("/");
            $http.get(url);
        };


        var test = function () {
            var current = 0;
            var reverse = false;

            var interval = setInterval(function () {
                self.press(self.pins[current]);
                if (current == self.pins.length - 1) {
                    reverse = true;
                }
                if (reverse) {
                    current--
                } else {
                    current++
                }

                if (current < 0) {
                    clearInterval(interval);
                }
            }, 500);
        }

        test();
    });