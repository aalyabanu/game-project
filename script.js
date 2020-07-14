class Zone {
    constructor(name) {
        this._name = name;
        this._description = "";
        this._connectedZones = {};
        this._character = "";
        this._zoneItem = "";
    }

    //getters and setters within the Zone class
    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get connectedZones() {
        return this._connectedZones;
    }

    get character() {
        return this._character;
    }

    get zoneItem() {
        return this._zoneItem;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            alert("Zone description is too short.");
            return;
        }
        this._description = value;
    }

    set character(value) {
        this._character = value;
    }

    set zoneItem(value) {
        this._zoneItem = value;
    }

    //template function to describe the Zone
    describe() {
        return "You are now in " + this._name + ". " + "If you look around you can see " + this._description;
    }

    //method to connect zones to the current one
    connectZone(direction, zoneToConnect) {
        this._connectedZones[direction] = zoneToConnect;
    }
    zoneDetails() {
        const entries = Object.entries(this._connectedZones);
        let details = []
        for (const [direction, zone] of entries) {
            let description = "to your " + "<b>" + direction + "</b>" + " lies " + "<b>" + zone._name + "</b>" + "</br>";
            details.push(description);
        }
        return "From here, " + details + "</br>" + "What are you going to do? Type " + "<b>" + "help " + "</b>" + "to see a list of commands.";
    }
    //method to move to a new zone
    move(direction) {
        if (direction in this._connectedZones) {
            return this._connectedZones[direction];

        } else {
            alert("You can't go that way!");
            return this;

        }
    }
} //class Zone

class Item {
    constructor(name) {
        this._name = name;
        this._description = "";
    }
    get name() {
        return this.name;
    }
    get description() {
        return this._description;
    }
    get pair() {
        return this._pair;
    }

    set name(value) {
        if (value < 3) {
            console.error("The item name is too short.");
            return;
        }
        this._name = value;
    }
    set description(value) {
        if (value < 4) {
            console.error("The item description is too short.");
            return;
        }
        this._description = value;
    }
    set pair(value) {
        if (value < 3) {
            console.error("The item pair is too short.")
            return;
        }
        this._pair = value;
    }
    describe() {
        return "You look around and find " + this._name + ". " + this._name + " is a " + this._description;
    }

}

//This is the parent class
class Character {
    constructor(name) {
        this._name = name;
        this._description = "";
        this._conversation = "";

    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get conversation() {
        return this._conversation;
    }
    set name(value) {
        if (value.length < 3) {
            console.error("Your Character name is too short");
            return;
        }
        this._name = value;
    }
    set description(value) {
        if (value < 4) {
            console.error("Your character description is too short");
            return;
        }
        this._description = value;
    }

    set conversation(value) {
        if (value < 4) {
            console.error("Your conversation is too short.")
            return;
        }
        this._conversation = value;
    }
    describe() {
        return "In front of you, you see " + this._name + ". " + this._name + " is " + this.description + "."
    }

    speak() {
        return this._conversation;
    }
}

//defining child classes
class Enemy extends Character {
    constructor(name) {
        super(name); //inherits parent variables  and methods;
        this._weakness = ""; //its own variable
    }
    get weakness() {
        return this._weakness;
    }
    set weakness(value) {
        if (value < 4) {
            console.error("Weakness description is too short.")
            return;
        }
        this._weakness = value;
    }
    attack(item) {
        let result = "";
        console.log("array passed on", item);
        console.log("item length is, ", item.length);
        for (let i = 0; i < item.length; i++) {
            console.log("value of i:  ", i);
            console.log("current array item: ", item[i]);
            if (item[i] === this._weakness) {
                result = true;
                break;
            } else {
                result = false;
            }
        }
        return result;
    }
}

class Friend extends Character {
    constructor(name) {
        super(name);
        this._gift = "";
    }
    get gift() {
        return this._gift;
    }
    set gift(value) {
        if (value < 3) {
            console.error("Gift name is too short.");
            return;
        }
        this._gift = value;
    }

}
class BilboBaggins {
    constructor() {
        this._backpack = []
    }
    get backpack() {
        return this._backpack;
    }

    //method to change score;
    changeScore(value, up) {
        if (up) {
            this._score = this._score + value;
        } else {
            this._score = this._score;
        }
        return this._score;
    }
    addItem(item) { //adds item to the backpack
        this._backpack.push(item);
    }

    checkItem(item) {
        for (let i = 0; i < this._backpack.length; i++)
            if (list[i] === item) {
                return true;
            }
        return false;
    }
    describe() {
        return "You feel " + this._react + "."
    }
}


//creating instances for Zone object and adding their description
const TheHill = new Zone("The Hill");
TheHill.description = "the most prestigious area of the Hobbition. Baggins family have lived here for centuries. "
const LakeTown = new Zone("Lake Town");
LakeTown.description = " a human-city built on Long Lake, near the Lonely Mountain. Bard, the Bowman lives here. "
const TheLonelyMountain = new Zone("The Lonely Mountain");
TheLonelyMountain.description = "the mountain that was once the home of the dwarves until the dragon Smaug took control over it.";
const Cave = new Zone("The cave");
Cave.description = "a spooky cave near the lonely mountain where nobody dares to go."
const Rivendell = new Zone("Rivendell");
Rivendell.description = "a deep valley that is only approachable by two narrow winding paths, where elves live."
const TheForestOfMirkwood = new Zone("The forest of Mirkwood");
TheForestOfMirkwood.description = " a dark and scary forest filled with giant spiders.";
const GoblinTown = new Zone("Goblin Town");
GoblinTown.description = " a network of branching caves and tunnels which is the dwelling place for the gobblins. "
const MistyMountain = new Zone("Misty Mountain");
MistyMountain.description = "a huge and dangerous mountain chain that stretches over hundreds of miles."
const TheGreenDragonInn = new Zone("The Green Dragon Inn");
TheGreenDragonInn.description = "a warm and friendly meeting place for all Shire-folks."

//connecting the zones together
MistyMountain.connectZone("east", Rivendell);
MistyMountain.connectZone("south", TheGreenDragonInn);
Rivendell.connectZone("east", Cave);
Rivendell.connectZone("west", MistyMountain);
Rivendell.connectZone("south", GoblinTown);
Cave.connectZone("west", Rivendell);
Cave.connectZone("south", TheLonelyMountain);
TheLonelyMountain.connectZone("north", Cave);
TheLonelyMountain.connectZone("west", GoblinTown);
TheLonelyMountain.connectZone("south", LakeTown);
GoblinTown.connectZone("north", Rivendell);
GoblinTown.connectZone("east", TheLonelyMountain);
GoblinTown.connectZone("west", TheGreenDragonInn);
GoblinTown.connectZone("south", TheForestOfMirkwood);
TheGreenDragonInn.connectZone("north", MistyMountain);
TheGreenDragonInn.connectZone("east", GoblinTown);
TheGreenDragonInn.connectZone("south", TheHill);
TheHill.connectZone("north", TheGreenDragonInn);
TheHill.connectZone("east", TheForestOfMirkwood);
TheForestOfMirkwood.connectZone("north", GoblinTown);
TheForestOfMirkwood.connectZone("east", LakeTown);
TheForestOfMirkwood.connectZone("west", TheHill);
LakeTown.connectZone("north", TheLonelyMountain);
LakeTown.connectZone("west", TheForestOfMirkwood);

//creating instances of items
const Key = new Item("Key");
Key.description = "The key that opens the secret treasure door in the Lonely Mountain";
const TreasureDoor = new Item(" Treasure Door");
TreasureDoor.description = "the secret door that leads to an immense amount of gold and jewelries, including the most precious jewel Arkenstone. But you need a special key to open the Treasure Door.";
TreasureDoor.pair = Key;
// const Longbow = new Item("Longbow");
// Longbow.description = "the legendary bow that was used to kill the last dragon that attacked the Shire."
const BlackArrow = new Item("Black Arrow");
BlackArrow.description = "not a regular arrow but one of the few arrows that have been forged by the dwarves of the Lonely Mountain. You can kill a dragon only by a black arrow. When Smaug attacked the dwarf kingdom, one of the dwarves managed to hide it in the dark forest of Mirkwood. Nobody has found it all these years.";
const Sting = new Item("Sting");
Sting.description = "a large elvish dagger. Its size is just perfect for little people to use as a sword."

//creating instances of different characters (friends and enemies)
const Smaug = new Enemy("Smaug");
Smaug.description = "a powerful and fearsome dragon. He roars and spits fire when he sees you.";
Smaug.conversation = " I am fire... I am death.My teeth are swords! My claws are spears! My wings are a hurricane! You will burn!";
Smaug.weakness = BlackArrow;

const Goblin = new Enemy("Goblin");
Goblin.description = "an ugly, beefy and greedy creature that feeds on anything imaginable. It Shrieks and squeals when it sees you";
Goblin.conversation = " grrr...I likes human..I eats it.";
Goblin.weakness = Sting;

const GiantSpiders = new Enemy("Giant spider");
GiantSpiders.description = "vicious and deadly creature. It hisses and bares its fang when it sees you. Nearby, you see the legendary Black Arrow that was used to kill the last dragon";
GiantSpiders.conversation = " hiss...hiss";
GiantSpiders.weakness = Sting;

const Gondalf = new Friend("Gondalf");
Gondalf.description = "a wise old wizard with long white hair and sweeping silver beard. He smiles and gives you a warm embrace. Then he points towards a golden key lying on a stone";
Gondalf.conversation = "We've been blind and in our blindness the enemy has returned. I entrust you the key to the lost treasures of the Lonely Mountain. I believe when the time comes, you will return the treasures to its rightful owner. ";

const Bard = new Friend("Bard");
Bard.description = "a grim and honest bowman who lives in the Lake Town with his three children. When he sees you, he thinks for a moment and wishes you well";
Bard.conversation = "The future of the Shire lies in your hands. ";

const Galadriel = new Friend("Galadriel");
Galadriel.description = "the greatest female elf in the middle-earth. She looks at you, reads your mind and points to a dagger lying on a stone table";
Galadriel.conversation = "Even the smallest person can change the course of the future. I offer you my dagger to help you in your times of need.";

//assigning items to zones or to the characters who gift them
TheLonelyMountain.zoneItem = TreasureDoor;
Gondalf.gift = Key;
// Bard.gift = Longbow;
Galadriel.gift = Sting;
TheForestOfMirkwood.zoneItem = BlackArrow;

//assigning characters to different zones
Rivendell.character = Galadriel;
Cave.character = Gondalf;
LakeTown.character = Bard;
MistyMountain.character = Smaug;
GoblinTown.character = Goblin;
TheForestOfMirkwood.character = GiantSpiders;

//creating player
const player = new BilboBaggins();

// Subroutines
function displayZoneInfo(zone) {
    let contentMessage = "";
    let textContent = "";
    if (zone.character === "") {    //nobody in the zone
        if (zone.zoneItem === "") {   //no item in the zone
            contentMessage = ""; //empty output
        } else {
            contentMessage = zone.zoneItem.describe(); //assign item description
        }
    } else {  //when there is no item in the zone but there is a character in the zone
        contentMessage = zone.character.describe();
    }
    textContent = "<p>" + zone.describe() + "</p>" + "<p>" + contentMessage + "</p>" + "<p>" + zone.zoneDetails() + "</p>";
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
}

let inventory = [];
function commandHandler(command, character, zone) {

    switch (command) {
        case "attack":
            if (character) {

                if (character.attack(inventory) === true) {
                    msg = "congratulations you defeated " + character.name;
                    alert(msg);


                } else {
                    alert(character.name + " has defeated you. You have not found the right weapon to kill " + character.name + " yet." + " GAME OVER.");
                }
                break;
            } else {
                alert("There is nobody to attack at the moment.");
                break;
            }

        case "talk":
            if (character) {
                msg = character.speak();
                alert(msg);
                break;
            } else {
                alert("There is nobody in front of you to start a dialogue.");
            }
        case "take":
            if (character.gift) {

                if (inventory.indexOf(character.gift) === -1) {
                    inventory.push(character.gift);
                    let itemAdded = inventory[inventory.length - 1]._name;
                    alert(itemAdded + " has been added to your backpack.");

                } else {
                    alert("This item already exists in your backpack.");
                }

            } else if (zone.zoneItem) {
                if (zone.zoneItem === TreasureDoor) {
                    alert("You cannot add this item to your backpack!")
                } else {

                    if (inventory.indexOf(zone.zoneItem) === -1) {
                        inventory.push(zone.zoneItem);
                        let itemAdded = inventory[inventory.length - 1]._name;
                        alert(itemAdded + " has been added to your backpack.");
                    }
                }
            } else {
                alert("There is nothing to take here.");
            }

            break;
        case "inventory":
            let array = [];
            for (i = 0; i < inventory.length; i++) {
                array.push(inventory[i]._name);
                console.log(array);
            }
            alert("Here is what's in your backpack so far:    " + array);
            break;
        case "help":
            alert("\r\n" + "List of possible commands" + "\r\n" + "To move:   north, east, south, west  " + "\r\n" + "To attack the enemy:   attack" + "\r\n" + "To take object:   take" + "\r\n" + "To read description of the object you  found:   item" + "\r\n" + "To check your backpack:   inventory" + "\r\n" + "To start dialogue with enemy/friend:   talk")
            break;

        case "item":
            if (character.gift) {
                alert("\r\n" + "What you have found here" + " is " + character.gift.description);
            } else if (zone.zoneItem) {
                alert("\r\n" + "What you have found here" + " is " + zone.zoneItem.description);
            } else {
                alert("Nothing is found here.");
            }
            break;
        default:
            alert("This command does not exist. Please try again.")
            break;

    }
}
let killedEnemies = [];
function startGame() {
    //set and display start Zone
    introDescription.style.display = "none";
    const score = 0;
    currentZone = TheHill;
    displayZoneInfo(currentZone);


    //handle commands
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let command = document.getElementById("usertext").value.toLowerCase();
            const directions = ["north", "south", "east", "west"];
            const commands = ["attack", "talk", "take", "inventory", "help", "item"];
            if (killedEnemies.length != 3) {
                if (directions.includes(command)) {
                    currentZone = currentZone.move(command);
                    displayZoneInfo(currentZone);
                } else if (commands.includes(command)) {
                    commandHandler(command, currentZone.character, currentZone)
                } else {
                    document.getElementById("usertext").value = ""
                    //change to text message for short time and then reshow
                    alert("that is not a valid command please try again")
                }
            }
        }
    });
}











