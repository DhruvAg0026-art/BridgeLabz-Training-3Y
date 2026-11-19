// Q8. Movie Ticket Booking System

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Method added to MovieTicket.prototype
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs.${this.price}`);
};

const t1 = new OnlineTicket("Interstellar", "A12", 300, 30);
const t2 = new OnlineTicket("Dangal", "B5", 250, 25);

// OnlineTicket objects se printTicket() call -> prototype chain se mil jata hai
t1.printTicket();
console.log("Total amount:", t1.getTotalAmount());

t2.printTicket();
console.log("Total amount:", t2.getTotalAmount());

// Prototype chain proof
console.log("\nhasOwnProperty('printTicket') on t1:", t1.hasOwnProperty("printTicket")); // false
console.log("'printTicket' in t1:", "printTicket" in t1); // true
console.log("t1 instanceof OnlineTicket:", t1 instanceof OnlineTicket);
console.log("t1 instanceof MovieTicket:", t1 instanceof MovieTicket);
console.log(
  "Chain OK:",
  Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
);
