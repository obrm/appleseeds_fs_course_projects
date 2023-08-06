
// ----- Tasks -----
// 1. Implementation
const avengers = new Movie("Avengers: Endgame", 2019, "Action");
avengers.addRating(5);
avengers.addRating(4);

const strangerThings = new Series("Stranger Things", 2016, "Horror", 25);
strangerThings.addRating(5);

const ourPlanet = new Documentary("Our Planet", 2019, "Nature");
ourPlanet.addRating(4.5);

// 2. Demonstration
const moviesList = [avengers, strangerThings, ourPlanet];
moviesList.forEach(movie => {
  movie.displayDetails();
  console.log(movie.typeOfMovie());
  console.log(`Average Rating: ${movie.getAverageRating()}`);
  console.log('-----------------------');
});

const netflix = new StreamingPlatform();
netflix.addMovie(avengers);
netflix.addMovie(strangerThings);
netflix.addMovie(ourPlanet);
console.log(`Overall platform rating: ${netflix.overallAverageRating()}`);

// Ensure to maintain code clarity, comment where necessary, and refactor any repetitive segments.
