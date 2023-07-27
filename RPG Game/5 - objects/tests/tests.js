// Sample Items
const potion = createItem("Potion", 20);
const superPotion = createItem("Super Potion", 50);
console.log(`Items Created: ${potion.name}, ${superPotion.name}`);

// Sample Abilities
const fireball = createAbility("Fireball", 30);
const thunderbolt = createAbility("Thunderbolt", 40);
console.log(`Abilities Created: ${fireball.name}, ${thunderbolt.name}`);

// Sample Players
const player1 = createPlayer("John", 100, [0, 0], [potion, superPotion], [fireball, thunderbolt], 1, 0, "Mage");
const player2 = createPlayer("Jane", 80, [1, 1], [potion], [fireball], 1, 0, "Rogue");
console.log(`Players Created: ${player1.name}, ${player2.name}`);

// Sample Enemies
const enemy1 = createEnemy("Goblin", 50, [2, 2], [], [fireball]);
const enemy2 = createEnemy("Orc", 100, [3, 3], [], [thunderbolt]);
console.log(`Enemies Created: ${enemy1.name}, ${enemy2.name}`);

// Sample NPCs
const npc1 = createNPC("Old man", 100, [4, 4], [], "Hello, traveler!");
console.log(`NPCs Created: ${npc1.name}`);

// Add them to the game world
gameWorld.addPlayer(player1);
gameWorld.addPlayer(player2);
gameWorld.addEnemy(enemy1);
gameWorld.addEnemy(enemy2);
gameWorld.addNPC(npc1);
console.log(`Entities Added to Game World: ${gameWorld.players.length} players, ${gameWorld.enemies.length} enemies, ${gameWorld.npcs.length} NPCs`);

// Move player1 to the same position as enemy1
console.log(`${player1.name} is moving to position [2, 2]`);
player1.move([2, 2]);

// Check for encounters
console.log(`Checking for encounters for ${player1.name}`);
gameWorld.checkForEncounters(player1);

// Move player1 to the same position as npc1
console.log(`${player1.name} is moving to position [4, 4]`);
player1.move([4, 4]);

// Talk to NPC
console.log(`Attempting to talk to ${npc1.name}`);
gameWorld.talkToNPC(player1, npc1);
