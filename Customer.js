const rental = require('./Rental');

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
    }
}

module.exports = Customer;