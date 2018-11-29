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
      let result = 'Rental Record for ' + this.name + "\n";
      const rentals = this.rentals;
      for(let movieId in rentals){
          const each = rentals[movieId];        
          result += "\t" + each.movie.title +"\t" + each.amountFor() + "\n";
      }
      result += "Amount owed is " + this.getTotalAmount() + "\n";
      result += "Total Points is " + this.getTotalFrequentPoints() +"\n";

      return result;
    }

    getTotalAmount(){
        let totalAmount = 0;
        for(let movieId in this.rentals){
            const each = this.rentals[movieId];
            totalAmount += each.amountFor();
        }
        return totalAmount;
    }

    getTotalFrequentPoints(){
        let frequentRenterPoints = 0;
        for(let movieId in this.rentals){
            const each = this.rentals[movieId];
            frequentRenterPoints += each.getFrequentPoints();
        }
        return frequentRenterPoints;
    }
}

module.exports = Customer;