const movie = require('./Movie');
class Rental{
    constructor(days, movie){
        this.days = days;
        this.movie = movie;
    }

    amountFor() {
        let result = 0;

        switch (this.movie.type) {
            case movie.REGULAR:
                result += 2;
                if (this.days > 2)
                    result += (this.days - 2) * 1.5;
                break;
            case movie.NEW_RELEASE:
                result += this.days * 3;
                break;
            case movie.CHILDRENS:
                result += 1.5;
                if (this.days > 3)
                    result += (this.days - 3) * 1.5;
                break;
        }
        return result;
    }
}

module.exports = Rental;