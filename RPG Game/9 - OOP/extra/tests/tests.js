
// ------------------------------
// TESTS
// ------------------------------

// SECTION 1: Testing the basic character
console.log("== Testing Character ==");
const basicChar = new Character("John", 100, 50, 20);
basicChar.displayStats();
console.log(basicChar.characterType());  // This is a basic character.
console.log("-----------------------------");

// SECTION 2: Testing encapsulation
console.log("== Testing Encapsulation: Attack & Damage ==");
const targetChar = new Character("Doe", 80, 40, 30);
basicChar.attack(targetChar);
console.log(targetChar.health);  // Expect decreased health value.
console.log("-----------------------------");

// SECTION 3: Testing inheritance with Knight
console.log("== Testing Knight ==");
const knight = new Knight("Arthur", 120, 60, 25, 15);
knight.displayStats();
console.log(knight.characterType());  // This is a knight.
knight.shieldAttack(targetChar);
console.log(targetChar.health);  // Expect further decreased health value.
console.log("-----------------------------");

// SECTION 3: Testing inheritance with Mage
console.log("== Testing Mage ==");
const mage = new Mage("Merlin", 90, 55, 15, 100);
mage.displayStats();
console.log(mage.characterType());  // This is a mage.
mage.castSpell(targetChar);
console.log(targetChar.health);  // Expect even more decreased health value.
console.log("-----------------------------");

// SECTION 5: Associations & Composition
console.log("== Testing Quests ==");
const quest1 = new Quest("Slay the dragon", "Defeat the mighty dragon and claim its treasure", "Gold", 1);
console.log(quest1.description);  // Defeat the mighty dragon and claim its treasure
basicChar.acceptQuest(quest1);
console.log(basicChar.quests);  // Expect to see the accepted quest
console.log("-----------------------------");

// SECTION 6: Advanced Polymorphism
console.log("== Testing Environments ==");
const forest = new Forest();
const desert = new Desert();
forest.manaRegeneration(mage);
console.log(mage.mana);  // Expect increased mana value for mage
desert.manaDepletion(mage);
console.log(mage.mana);  // Expect decreased mana value for mage
console.log("-----------------------------");

// BONUS
console.log("== Testing BattleArena ==");
const arena = new BattleArena();
arena.duel(basicChar, knight);  // Just an example. Either character could win.
console.log("-----------------------------");

console.log("== Testing Inventory ==");
const inventory = new Inventory();
inventory.addItem("Potion");
inventory.addItem("Sword");
inventory.displayItems();  // Expect Potion, Sword
inventory.removeItem("Potion");
inventory.displayItems();  // Expect Sword
console.log("-----------------------------");
