let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "claw hammer", power: 50 },
  { name: "sword", power: 100 },
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  }
}

function fightSlime() {
  fighting = true;
  monsterHealth = 10;
  monsterName.innerText = "Slime";
  monsterHealthText.innerText = monsterHealth;
  monsterStats.style.display = "block";
  text.innerText = "You are fighting a slime.";
  button1.innerText = "Attack";
  button2.innerText = "Run";
  button3.innerText = "";
  button1.onclick = attack;
  button2.onclick = run;
  button3.onclick = "";
}

function fightBeast() {
  fighting = true;
  monsterHealth = 20;
  monsterName.innerText = "Fanged Beast";
  monsterHealthText.innerText = monsterHealth;
  monsterStats.style.display = "block";
  text.innerText = "You are fighting a fanged beast.";
  button1.innerText = "Attack";
  button2.innerText = "Run";
  button3.innerText = "";
  button1.onclick = attack;
  button2.onclick = run;
  button3.onclick = "";
}

// Add this code to handle the attack and run functions
function attack() {
  if (fighting) {
    let playerAttack = weapons[currentWeaponIndex].power;
    monsterHealth -= playerAttack;
    monsterHealthText.innerText = monsterHealth;
    if (monsterHealth <= 0) {
      fighting = false;
      monsterStats.style.display = "none";
      text.innerText = "You killed the monster!";
      button1.onclick = goTown;
      button2.onclick = goCave;
      button3.onclick = fightDragon;
    } else {
      let monsterAttack = Math.floor(Math.random() * 10);
      health -= monsterAttack;
      healthText.innerText = health;
      if (health <= 0) {
        text.innerText = "You died!";
        button1.onclick = "";
        button2.onclick = "";
        button3.onclick = "";
      }
    }
  }
}

function run() {
  if (fighting) {
    fighting = false;
    monsterStats.style.display = "none";
    text.innerText = "You ran away!";
    button1.onclick = goTown;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
  }
}
