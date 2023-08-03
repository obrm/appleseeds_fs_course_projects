// Create some media
console.log("Creating media");
const movie = new Movie("Inception", "2 hours 28 minutes", "Christopher Nolan", "Science fiction");
const series = new Series("Breaking Bad", "45 minutes per episode", 5);
console.log(movie.displayDetails());
console.log(series.displayDetails());

// Create a user
console.log("Creating user");
const user = new User("Alice");
console.log(`User: ${user.username}`);

// Add media to the user's watched list
console.log("Adding media to watched list");
user.addMedia(movie);
user.addMedia(series);
console.log(user.displayWatchedMedia());

// Rate some media
console.log("Rating media");
user.rateMedia(movie, 5);
user.rateMedia(series, 4);
console.log(user.displayWatchedMedia());

// Show average rating of media
console.log("Average Ratings");
console.log(movie.calculateAverageRating());
console.log(series.calculateAverageRating());

// Try to rate a media that the user hasn't watched
console.log("Try to rate unwatched media");
const unwatchedMovie = new Movie("Unwatched Movie", "2 hours", "Unknown Director", "Unknown Genre");
console.log(user.rateMedia(unwatchedMovie, 3));
