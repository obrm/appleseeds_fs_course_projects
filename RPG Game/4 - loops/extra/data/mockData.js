// 2D grid representing the game world
const grid = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0]
];

// Player's current position
const playerPosition = { x: 1, y: 1 };

// Item's current position
const itemPosition = { x: 1, y: 2 };

// Goal's current position
const goalPosition = { x: 0, y: 2 };

// Player's HP and Attack Power
const playerHP = 100;
const playerAttack = 20;

// Enemy's HP and Attack Power
const enemyHP = 50;
const enemyAttack = 15;

// Directions for the player to move
const directions = ['north', 'south', 'east', 'west'];
