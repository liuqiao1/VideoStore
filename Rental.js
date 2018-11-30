const movie = require('./Movie');
class Rental{
    constructor(days, movie){
        this.days = days;
        this.movie = movie;
    }

    getCharge(){
        return this.movie.amountFor(this.days);
    }

    getFrequentPoints() {
        return this.movie.getFrequentPoints(this.days);
    }
}

module.exports = Rental;