// Test for Exercise 2
console.log("Testing addLocation method:");
TravelPlanner.addLocation("Paris", { description: "The City of Love" });
TravelPlanner.addLocation("London", { description: "Famous for its iconic landmarks like the Big Ben, London Eye" });
console.log(TravelPlanner.locations);

// Test for Exercise 3
console.log("Testing deleteLocation method:");
TravelPlanner.deleteLocation("London");
console.log(TravelPlanner.locations);

// Test for Exercise 4
console.log("Testing findLocation method:");
console.log(TravelPlanner.findLocation("Paris"));

// Test for Exercise 5
console.log("Testing sortLocations method:");
TravelPlanner.addLocation("New York", { description: "The city that never sleeps" });
TravelPlanner.addLocation("Berlin", { description: "Famous for its nightlife and history" });
TravelPlanner.sortLocations();
console.log(TravelPlanner.locations);

// Test for Exercise 6
console.log("Testing editLocation method:");
TravelPlanner.editLocation("Paris", { description: "Famous for its food and Eiffel Tower" });
console.log(TravelPlanner.findLocation("Paris"));

// Test for Exercise 7
console.log("Testing showAll method:");
TravelPlanner.showAll();

// Test for Exercise 8
console.log("Testing filterLocations method:");
console.log(TravelPlanner.filterLocations("food"));

// Test for Exercise 9 and Exercise 10
console.log("Testing rateLocation and getAverageRating methods:");
TravelPlanner.rateLocation("Paris", 4);
TravelPlanner.rateLocation("Paris", 5);
console.log(`Average rating for Paris: ${TravelPlanner.getAverageRating("Paris")}`);
TravelPlanner.rateLocation("New York", 4);
TravelPlanner.rateLocation("Berlin", 3);
console.log(`Average rating for New York: ${TravelPlanner.getAverageRating("New York")}`);
console.log(`Average rating for Berlin: ${TravelPlanner.getAverageRating("Berlin")}`);

// Test for Exercise 10
console.log("Testing getTopRatedLocation method:");
console.log(TravelPlanner.getTopRatedLocation());
