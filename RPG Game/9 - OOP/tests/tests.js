// Instantiate a new game
const game = new Game();

// Start the game with a player
console.log("Starting game with player 'John'");
game.startGame("John");
console.log(game.player.displayCharacter());

// Spawn an enemy
console.log("Spawning enemy 'Goblin'");
game.spawnEnemy('Goblin', 50, 5, 'Goblin');
console.log(game.enemies[0].displayCharacter());

// Player attacks the enemy
console.log("Player attacks Goblin");
console.log(game.playerAttack(game.enemies[0]));

// Spawn items
console.log("Spawning items 'Health Potion' and 'Strength Elixir'");
game.spawnItem('Health Potion', 'A potion that restores 30 health.');
game.spawnItem('Strength Elixir', 'An elixir that increases strength by 10.');
console.log(`Spawned Items: ${game.items.map(item => item.name).join(', ')}`);

// Player picks up items
console.log("Player picks up Health Potion and Strength Elixir");
game.playerPickUpItem(game.items[0]);
game.playerPickUpItem(game.items[0]);
console.log(game.player.displayCharacter());

// Player uses the health potion
console.log("Player uses Health Potion");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player uses the strength elixir
console.log("Player uses Strength Elixir");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player upgrades level
console.log("Player upgrades level");
game.player.upgrade();
console.log(game.player.displayCharacter());

// End the game
console.log("Ending game");
game.endGame();
