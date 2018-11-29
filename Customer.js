const rental = require('./Rental');
const movie = require('./Movie');

class Customer{
    constructor(name){
        this.name = name;
        this.rentals = {};
    }

    addRental(days, movie){
        if(!this.rentals[movie.movieId])this.rentals[movie.movieId] = {days, movie};
    }

    removeRental(movieId){
        if(this.rental[movieId])delete this.rental[movieId];
    }

    statement(){
      console.log('statement...');
      let totalAmount = 0, frequentRenterPoints = 0, result = 'Rental Record for ' + this.name + "\n";
      const rentals = this.rentals;
      for(let movieId in rentals){
          const each = rentals[movieId];
        //   console.log(each);

          const thisAmount = this.amountFor(each);

        //   console.log(thisAmount);
        frequentRenterPoints ++;
        if(each.movie.type == movie.NEW_RELEASE && each.days > 1)frequentRenterPoints++;
        
        result += "\t" + each.movie.title +"\t" + thisAmount + "\n";
        totalAmount += thisAmount;
      }
      result += "Amount owed is " + totalAmount + "\n";
      result += "Total Points is " + frequentRenterPoints +"\n";

      return result;

    }

    amountFor(each) {
        let thisAmount = 0;

        switch (each.movie.type) {
            case movie.REGULAR:
                thisAmount += 2;
                if (each.days > 2)
                    thisAmount += (each.days - 2) * 1.5;
                break;
            case movie.NEW_RELEASE:
                thisAmount += each.days * 3;
                break;
            case movie.CHILDRENS:
                thisAmount += 1.5;
                if (each.days > 3)
                    thisAmount += (each.days - 3) * 1.5;
                break;
        }
        return thisAmount;
    }
}

module.exports = Customer;