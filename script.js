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
            let description = "to your " + "<b>" + direction + "</b>" + " lies " + zone._name + "  "+"</br>";
            details.push(description);
        }
        return "From here, " + details + "</br>" + "What would you like to do?";
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
        if (item === this._weakness) {
            return true;
        } else {
            return false;
        }
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
    present() {
        score = score++;
        return "You have now been given " + this._gift.name + ". " + this._gift.name + " is " + this.gift.description;
    }

}
class BilboBaggins {
    constructor() {
        this._backpack = []
        this._score = 0;
    }
    get backpack() {
        return this._backpack;
    }
    get score() {
        return this._score;
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
LakeTown.description = " a human-city built on Long Lake, near the Lonely Mountain. Bard, the Bowman lives here. Legend has it that he knows the location of the famous Longbow which was used by his ancestors to kill the last dragon that attacked the Shire."
const TheLonelyMountain = new Zone("The Lonely Mountain");
TheLonelyMountain.description = "the mountain that was once the home of the dwarves until the dragon Smaug took control over it.";
const Cave = new Zone("The cave");
Cave.description = "a spooky cave near the lonely mountain where nobody dares to go."
const Rivendell = new Zone("Rivendell");
Rivendell.description = "a deep valley that is only approachable by two narrow winding paths, where elves live with their master Elrond."
const TheForestOfMirkwood = new Zone("The forest of Mirkwood");
TheForestOfMirkwood.description = " a dark and scary forest filled with giant spiders.";
const GoblinTown = new Zone("Goblin Town");
GoblinTown.description = " a network of branching caves and tunnels which is the dwelling place for the gobblins and their king Ashûrz. "
const MistyMountain = new Zone("Misty Mountain");
MistyMountain.description = "A huge and dangerous mountain chain that stretches over hundreds of miles."
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
const TreasureDoor = new Item(" Treasure Door");
TreasureDoor.description = "the secret door that leads to an immense amount of gold and jewelries, including the most precious jewel Arkenstone. But you need a special key to open the Treasure Door.";
const Key = new Item("Key");
Key.description = "The key to enchanted secret entrance to the Lonely Mountain";
const Longbow = new Item("Longbow");
Longbow.description = "the legendary bow that was used to kill the last dragon that attacked the Shire."
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
GiantSpiders.description = "vicious and deadly creature that lives in dark and cold areas of the forest. It hisses and bares its fang when it sees you";
GiantSpiders.conversation = " hiss...hiss";
GiantSpiders.weakness = Sting;

const Gondalf = new Friend("Gondalf");
Gondalf.description = "a wise old wizard with long white hair and sweeping silver beard. He smiles and gives you a warm embrace";
Gondalf.conversation = "We've been blind and in our blindness the enemy has returned. I entrust you the key to the lost treasures of the Lonely Mountain. I believe when the time comes, you will return the treasures to its rightful owner. ";

const Bard = new Friend("Bard");
Bard.description = "a grim and honest bowman who lives in the Lake Town with his three children. When he sees you, he thnks for a moment and comes forward.";
Bard.conversation = "I guess it is time for me to hand you the legendary Longbow. The future of the Shire lies in your hands. ";

const Galadriel = new Friend("Galadriel");
Galadriel.description = "the greatest female elf in the middle-earth. She looks at you and reads your mind.";
Galadriel.conversation = "Even the smallest person can change the course of the future. I offer you my dagger to help you in your times of need.";

//assigning items to zones or to the characters who gift them
TheLonelyMountain.zoneItem = TreasureDoor;
Gondalf.gift = Key;
Bard.gift = Longbow;
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
console.log("current score " + player.score);

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


function commandHandler(command, character) {
    switch (command) {
        case "attack":
            //work out how to pass items to fight method from player backpack
            if (character.attack() === true) {
                msg = "congratulations you defeated" + character.name;
                alert(msg);
            } else {
                alert("game over");
            }
            break;
        case "talk":
            msg = character.speak();
            alert(msg);
            break;
        case "take":
            msg = character.present();
            alert(msg);
            break;
        default:
            alert("")
            break;

    }
}

function startGame() {
    //set and display start Zone
    introDescription.style.display = "none";
    currentZone = TheHill;
    displayZoneInfo(currentZone);

    //handle commands
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let command = document.getElementById("usertext").value.toLowerCase();
            const directions = ["north", "south", "east", "west"];
            const commands = ["attack", "hug", "talk", "take", "inventory"];
            if (directions.includes(command)) {
                currentZone = currentZone.move(command);
                displayZoneInfo(currentZone);
            } else if (commands.includes(command)) {
                commandHandler(command, currentZone.character)
            } else {
                document.getElementById("usertext").value = ""
                //change to text message for short time and then reshow
                alert("that is not a valid command please try again")
            }
        }
    });
}











