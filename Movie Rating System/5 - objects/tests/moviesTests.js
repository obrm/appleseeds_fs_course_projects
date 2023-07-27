movieDatabase.addMovie("The Godfather");
movieDatabase.addRating("The Godfather", 9);
movieDatabase.addRating("The Godfather", 10);
movieDatabase.addRating("The Godfather", 9);

movieDatabase.addMovie("The Shawshank Redemption");
movieDatabase.addRating("The Shawshank Redemption", 9);
movieDatabase.addRating("The Shawshank Redemption", 10);
movieDatabase.addRating("The Shawshank Redemption", 8);

movieDatabase.addMovie("Pulp Fiction");
movieDatabase.addRating("Pulp Fiction", 8);
movieDatabase.addRating("Pulp Fiction", 9);
movieDatabase.addRating("Pulp Fiction", 8);

movieDatabase.addMovie("The Empire Strikes Back");
movieDatabase.addRating("The Empire Strikes Back", 9);
movieDatabase.addRating("The Empire Strikes Back", 8);
movieDatabase.addRating("The Empire Strikes Back", 10);

movieDatabase.addMovie("The Dark Knight");
movieDatabase.addRating("The Dark Knight", 9);
movieDatabase.addRating("The Dark Knight", 10);
movieDatabase.addRating("The Dark Knight", 8);

movieDatabase.addMovie("Inception");
movieDatabase.addRating("Inception", 8);
movieDatabase.addRating("Inception", 8);
movieDatabase.addRating("Inception", 9);

console.log(movieDatabase.searchMovie("the")); // Search for movies with "the" in the title
console.log(movieDatabase.movies); // Log the full database
movieDatabase.sortMoviesByRating(); // Sort the movies by rating
console.log(movieDatabase.movies); // Log the sorted database
movieDatabase.sortMoviesByTitle(); // Sort the movies by title
console.log(movieDatabase.movies); // Log the sorted database
