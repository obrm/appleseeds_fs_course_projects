// Create a new trip
console.log("Creating a new trip");
const trip = new Trip();

// Set the trip's origin
console.log("Setting the trip's origin");
trip.setOrigin("New York City", "The Big Apple", "2023-09-01");
console.log(trip.origin.displayLocation());

// Add some destinations
console.log("Adding some destinations");
trip.addDestination("London", "The capital city of England", "2023-09-02");
trip.addDestination("Paris", "The city of love", "2023-09-05");
for (let destination of trip.destinations) {
  console.log(destination.displayLocation());
}

// Add some transports
console.log("Adding some transports");
trip.addTransport('flight', '7 hours', 500, 'AB123');
trip.addTransport('train', '2 hours', 100, 'XYZ789');
trip.addTransport('car', '1 hour', 50, { make: 'Toyota', model: 'Corolla' });
for (let transport of trip.transports) {
  console.log(transport.displayTransport());
}

// Change a transport's duration and cost
console.log("Changing a transport's duration and cost");
trip.transports[0].changeDuration('8 hours');
trip.transports[0].changeCost(550);
console.log(trip.transports[0].displayTransport());

// Display the trip's details
console.log("Displaying the trip's details");
console.log(trip.displayTrip());

// Add an activity to a location
console.log("Adding an activity to a location");
trip.origin.addActivity("Sightseeing at Times Square");
console.log(trip.origin.displayLocation());

// Remove an activity from a location
console.log("Removing an activity from a location");
trip.origin.removeActivity("Sightseeing at Times Square");
console.log(trip.origin.displayLocation());
