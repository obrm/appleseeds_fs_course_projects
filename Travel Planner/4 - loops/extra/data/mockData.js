// Mock data for Calculate Total Travel Time and Find Longest Travel Route
const destinations = [
  {
    name: "Paris",
    distance: 500,
    speed: 50,
    routes: [
      { name: "Route 1", distance: 300 },
      { name: "Route 2", distance: 250 }
    ]
  },
  {
    name: "London",
    distance: 200,
    speed: 70,
    routes: [
      { name: "Route 1", distance: 200 },
      { name: "Route 2", distance: 280 }
    ]
  },
  {
    name: "New York",
    distance: 3000,
    speed: 500,
    routes: [
      { name: "Route 1", distance: 1500 },
      { name: "Route 2", distance: 2000 }
    ]
  }
];

// Mock data for Travel Itinerary and Least Number of Connections
const connections = [
  { name: "Paris", connections: ["London"] },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] }
];
