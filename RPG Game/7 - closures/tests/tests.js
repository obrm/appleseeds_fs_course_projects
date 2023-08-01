
// Exercise 1: Creating a Player Character
let playerCharacter = createPlayerCharacter("Hero", 1);

playerCharacter.levelUp();
// Output: Hero leveled up to level 2!

playerCharacter.addXP(100);
// Output: Hero gained 100 XP!


// Exercise 2: Managing Inventory
let inventory = createInventory();

inventory.addItem("Sword");
// Output: Sword added to the inventory.

inventory.addItem("Shield");
// Output: Shield added to the inventory.

console.log(inventory.getItems());
// Output: ["Sword", "Shield"]

inventory.removeItem("Sword");
// Output: Sword removed from the inventory.

