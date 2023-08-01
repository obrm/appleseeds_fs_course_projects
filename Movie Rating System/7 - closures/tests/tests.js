// Usage example:
// Create a movie with details
let titanic = createMovieWithDetails("Titanic", "James Cameron", 1997);
console.log(titanic.getDetails());
// Output: { title: 'Titanic', director: 'James Cameron', year: 1997 }

// Adding ratings to the movie
titanic.addRating(8);
titanic.addRating(9);
titanic.addRating(7);
console.log(titanic.getAverageRating());
// Output: 8

// Attempting to add more than 10 ratings to the movie
for (let i = 0; i < 11; i++) {
  titanic.addRating(7);
}
// Output: "Maximum number of ratings reached!"

// Create a movie database
let myDatabase = createMovieDatabase();

// Add movies to the database
myDatabase.addMovie("Titanic", "James Cameron", 1997);
myDatabase.addMovie("Inception", "Christopher Nolan", 2010);

// Find a movie in the database
let foundMovie = myDatabase.findMovieByTitle("Titanic");
console.log(foundMovie.getDetails());
// Output: { title: 'Titanic', director: 'James Cameron', year: 1997 }

// Calculate the average rating of all movies in the database
console.log(myDatabase.getAverageRatingOfAllMovies());
// Output: 0, as no ratings have been added yet to the movies in the database
