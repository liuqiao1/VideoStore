'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rental = require('./Rental');
var movie = require('./Movie');

var Customer = function () {
    function Customer(name) {
        _classCallCheck(this, Customer);

        this.name = name;
        this.rentals = {};
    }

    _createClass(Customer, [{
        key: 'addRental',
        value: function addRental(days, movie) {
            if (!this.rentals[movie.movieId]) this.rentals[movie.movieId] = new rental(days, movie);
        }
    }, {
        key: 'removeRental',
        value: function removeRental(movieId) {
            if (this.rental[movieId]) delete this.rental[movieId];
        }
    }, {
        key: 'statement',
        value: function statement() {
            console.log('statement...');
            var result = 'Rental Record for ' + this.name + "\n";
            var rentals = this.rentals;
            for (var movieId in rentals) {
                var each = rentals[movieId];
                result += "\t" + each.movie.title + "\t" + each.getCharge() + "\n";
            }
            result += "Amount owed is " + this.getTotalAmount() + "\n";
            result += "Total Points is " + this.getTotalFrequentPoints() + "\n";

            return result;
        }
    }, {
        key: 'getTotalAmount',
        value: function getTotalAmount() {
            var totalAmount = 0;
            for (var movieId in this.rentals) {
                var each = this.rentals[movieId];
                totalAmount += each.getCharge();
            }
            return totalAmount;
        }
    }, {
        key: 'getTotalFrequentPoints',
        value: function getTotalFrequentPoints() {
            var frequentRenterPoints = 0;
            for (var movieId in this.rentals) {
                var each = this.rentals[movieId];
                frequentRenterPoints += each.getFrequentPoints();
            }
            return frequentRenterPoints;
        }
    }]);

    return Customer;
}();

module.exports = Customer;