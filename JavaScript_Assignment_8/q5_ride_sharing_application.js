// Q5. Ride-Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || Number.isNaN(this.distance)) {
      throw new Error("Distance is required to calculate fare");
    }
    if (typeof this.distance !== "number") {
      throw new Error("Distance must be a number");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative");
    }

    const baseFare = 50;
    const ratePerKm = 12;
    return baseFare + this.distance * ratePerKm;
  }
}

const rider = new User("Aman", 4.8);
const driver = new Driver("Suresh", 4.9, { model: "Swift Dzire", number: "UP85 AB 1234" });

console.log("Rider:", rider.name, "| Driver:", driver.name, "| Vehicle:", driver.vehicleDetails.model);

const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -50),
  new Trip("Mathura", "Delhi"), // distance missing
];

trips.forEach((trip, i) => {
  try {
    const fare = trip.calculateFare();
    console.log(`Trip ${i + 1} (${trip.fromLocation} -> ${trip.toLocation}): Fare = Rs.${fare}`);
  } catch (error) {
    console.log(`Trip ${i + 1} (${trip.fromLocation} -> ${trip.toLocation}) Error: ${error.message}`);
  }
});
