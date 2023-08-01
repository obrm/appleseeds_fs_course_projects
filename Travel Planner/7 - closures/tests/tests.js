// Using createTravelPlanner function
let myTravelPlanner = createTravelPlanner();

// Adding destinations
myTravelPlanner.addDestination("Paris");
// Output: "Paris added to the travel planner."
myTravelPlanner.addDestination("London");
// Output: "London added to the travel planner."

// Removing a destination
myTravelPlanner.removeDestination("Paris");
// Output: "Paris removed from the travel planner."

// Attempting to remove a non-existing destination
myTravelPlanner.removeDestination("Rome");
// Output: "Rome is not in the travel planner."

// Getting the list of destinations
console.log(myTravelPlanner.getDestinations());
// Output: ["London"]

// Using createTravelPlannerWithDetails function
let myDetailedTravelPlanner = createTravelPlannerWithDetails();

// Adding destinations with details
myDetailedTravelPlanner.addDestinationWithDetails("Paris", { attractions: ["Eiffel Tower", "Louvre Museum"] });
// Output: "Paris added to the travel planner with details."
myDetailedTravelPlanner.addDestinationWithDetails("London", { attractions: ["London Eye", "British Museum"] });
// Output: "London added to the travel planner with details."

// Removing a destination
myDetailedTravelPlanner.removeDestination("Paris");
// Output: "Paris removed from the travel planner."

// Attempting to remove a non-existing destination
myDetailedTravelPlanner.removeDestination("Rome");
// Output: "Rome is not in the travel planner."

// Getting the list of destinations with details
console.log(myDetailedTravelPlanner.getDestinationsWithDetails());
// Output: [{ destination: "London", details: { attractions: ["London Eye", "British Museum"] }}]
