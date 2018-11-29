const rental = require('./Rental');
const movie = require('./Movie');

class Customer{
    constructor(name){
        this.name = name;
        this.rentals = {};
    }

    addRental(days, movie){
        if(!this.rentals[movie.movieId])this.rentals[movie.movieId] = new rental(days, movie);
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
        //   console.log('each=====', each.amountFor);
        frequentRenterPoints ++;
        if(each.movie.type == movie.NEW_RELEASE && each.days > 1)frequentRenterPoints++;
        
        result += "\t" + each.movie.title +"\t" + each.amountFor() + "\n";
        totalAmount += each.amountFor();
      }
      result += "Amount owed is " + totalAmount + "\n";
      result += "Total Points is " + frequentRenterPoints +"\n";

      return result;

    }

    
}

module.exports = Customer;