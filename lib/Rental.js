'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var movie = require('./Movie');

var Rental = function () {
    function Rental(days, movie) {
        _classCallCheck(this, Rental);

        this.days = days;
        this.movie = movie;
    }

    _createClass(Rental, [{
        key: 'getCharge',
        value: function getCharge() {
            return this.movie.amountFor(this.days);
        }
    }, {
        key: 'getFrequentPoints',
        value: function getFrequentPoints() {
            return this.movie.getFrequentPoints(this.days);
        }
    }]);

    return Rental;
}();

module.exports = Rental;