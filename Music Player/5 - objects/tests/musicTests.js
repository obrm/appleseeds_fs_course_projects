// Test for Exercise 1
console.log("Testing addSong method:");
musicPlayer.addSong("Song1", "Artist1", "3:30");
musicPlayer.addSong("Song2", "Artist2", "4:00");
musicPlayer.addSong("Song3", "Artist3", "5:00");
console.log(musicPlayer.songs);

console.log("Testing removeSong method:");
musicPlayer.removeSong("Song1");
console.log(musicPlayer.songs);

// Test for Exercise 2
console.log("Testing addPlaylist method:");
musicPlayer.addPlaylist("Playlist1");
musicPlayer.addPlaylist("Playlist2");
console.log(musicPlayer.playlists);

console.log("Testing removePlaylist method:");
musicPlayer.removePlaylist("Playlist2");
console.log(musicPlayer.playlists);

// Test for Exercise 3
console.log("Testing addSongToPlaylist method:");
musicPlayer.addSongToPlaylist("Song2", "Playlist1");
musicPlayer.addSongToPlaylist("Song3", "Playlist1");
console.log(musicPlayer.playlists);

console.log("Testing removeSongFromPlaylist method:");
musicPlayer.removeSongFromPlaylist("Song2", "Playlist1");
console.log(musicPlayer.playlists);

// Test for Exercise 4
console.log("Testing playSong method:");
musicPlayer.playSong("Song2");
musicPlayer.playSong("Song3");
musicPlayer.playSong("Song2");
console.log(musicPlayer.songs);

// Test for Exercise 5
console.log("Testing displayPlaylist method:");
console.log(musicPlayer.displayPlaylist("Playlist1"));
