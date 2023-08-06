console.log("---------------- Testing Destination ----------------");

const genericDestination = new Destination("Generic Place", "This is a generic description.");
genericDestination.weather = "Sunny";
genericDestination.addHighlight("Highlight 1");
genericDestination.addHighlight("Highlight 2");
genericDestination.displayInfo();

console.log("---------------- Testing City ----------------");

const newYork = new City("New York", "The Big Apple", 8000000, ["Subway", "Bus", "Taxi"]);
newYork.weather = "Rainy";
newYork.addHighlight("Statue of Liberty");
newYork.addHighlight("Central Park");
newYork.displayInfo();

console.log("---------------- Testing Natural Reserve ----------------");

const yellowstone = new NaturalReserve("Yellowstone", "Oldest National Park in the USA", ["Pine Trees"], ["Bison", "Wolves"]);
yellowstone.weather = "Cloudy";
yellowstone.addHighlight("Old Faithful Geyser");
yellowstone.displayInfo();

console.log("---------------- Testing Beach ----------------");

const maldivesBeach = new Beach("Maldives", "Tropical Paradise", "White Sand", "Crystal Clear");
maldivesBeach.weather = "Sunny";
maldivesBeach.addHighlight("Coral Reefs");
maldivesBeach.displayInfo();

console.log("---------------- Testing Trip ----------------");

const summerTrip = new Trip("Summer Vacation", "14 days");
summerTrip.addDestination(newYork);
summerTrip.addDestination(yellowstone);
summerTrip.addDestination(maldivesBeach);
summerTrip.setTransportation(new Transport("Airplane", "First Class"));
summerTrip.setLodging(new Lodging("Hotel", ["Wi-Fi", "Breakfast", "Pool"]));

console.log("Trip Name:", summerTrip.name);
console.log("Trip Duration:", summerTrip.duration + " days");
console.log("Trip Destinations:", summerTrip.destinations.map(dest => dest.name).join(", "));
console.log("Transportation:", summerTrip.transportation.map(trans => trans.type + " - " + trans.details).join(", "));
console.log("Lodging Amenities:", summerTrip.lodging.map(lodge => lodge.type + ": " + lodge.amenities.join(", ")).join(", "));

console.log("---------------- Tests Completed ----------------");
