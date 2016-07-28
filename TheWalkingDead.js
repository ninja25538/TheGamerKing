var pistolX = 20;
var pistolY = 20;
var pistolWidth = 50;
var pistolHeight = 5;

var characterX = 1;
var characterY = 200;




//Shows info about weapons
function Weapon(name, damage, gun, ammo, owned) {
 this.name = name;
 this.damage = damage;
 this.gun = gun;
 this.ammo = ammo;
 this.owned = owned;
}

 var applecore = new Weapon ("apple core", 1, false, 1, false);
 var dagger = new Weapon ("dagger", 3, false, Number.POSITIVE_INFINITY, false);
 var fist = new Weapon ("fist", 1, false, Number.POSITIVE_INFINITY, true);
 var goldenpistol = new Weapon ("golden pistol", 6, true, Number.POSITIVE_INFINITY, false);
 var knife = new Weapon ("knife", 2, false, 0, false);
 var machinegun = new Weapon ("machine gun", 5, true, 0, false);
 var machinepistol = new Weapon("machine pistol", 7, true, 0, false);
 var rocketlauncher = new Weapon("rocket launcher", 27, true, 0, false);
 var sharpcreditcard = new Weapon("sharp credit card", 2, false, Number.POSITIVE_INFINITY, false);
 var shotgun = new Weapon("shotgun", 7, true, 0, false);
 var sword = new Weapon("sword", 5, false, Number.POSITIVE_INFINITY, false);
 var zombiehead = new Weapon("zombie head", 2, true, 1, false);

var canvas = document.getElementById("TheWalkingDead");
var ctx = canvas.getContext("2d");

//draws the first character option
var drawCharacter1 = function(){

 //The code below draws character1's head

 //Draws character 1's stylish hair
 ctx.fillStyle = "black";
 ctx.fillRect(characterX + 24, characterY + 4, 8, 18);
 ctx.fillRect(characterX + 1, characterY + 4, 8, 18);
 ctx.fillRect(characterX + 1, characterY + 2, 31, 5);

 //Draws character1's face
 ctx.fillStyle = "rgb(148, 115, 16)";
 ctx.fillRect(characterX + 9, characterY + 7, 15, 15);

 //Draws character1's eyes
 ctx.fillStyle = "black";
 ctx.fillRect(characterX + 11, characterY + 9, 3, 6);
 ctx.fillRect(characterX + 19, characterY + 9, 3, 6);

 //Draws character1's designer shirt
ctx.fillStyle = "red";
ctx.fillRect(characterX + 9, characterY + 21, 15, 13);

//Draws the black outline
ctx.fillStyle = "black";
ctx.fillRect(characterX + 9, characterY + 21, 1, 10);

};


drawCharacter1();

var drawPistol = function(){




ctx.fillStyle="silver";
ctx.fillRect(pistolX, pistolY - 5, pistolWidth, pistolHeight);
ctx.fillRect(pistolX, pistolY, pistolWidth, pistolHeight);
ctx.fillStyle = "gold";
ctx.fillRect(pistolX, pistolY + 5, pistolWidth - 30, pistolHeight + 10);
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(pistolX - 5, pistolY - 5, pistolWidth - 45, pistolHeight + 20);
ctx.fillRect(pistolX, pistolY - 10, pistolWidth, pistolHeight);
ctx.fillRect(pistolX + 45 , pistolY - 5, pistolWidth - 45, pistolHeight + 5);
ctx.fillRect(pistolX + 25, pistolY + 5, pistolWidth - 25, pistolHeight);
ctx.fillRect(pistolX + 20 , pistolY + 15, pistolWidth - 45, pistolHeight);
ctx.fillRect(pistolX + 25 , pistolY + 10, pistolWidth - 45, pistolHeight);
ctx.fillRect(pistolX + 20 , pistolY + 5, pistolWidth - 45, pistolHeight);
ctx.fillRect(pistolX, pistolY + 20, pistolWidth - 30, pistolHeight);
ctx.fillRect(pistolX, pistolY + 18, pistolWidth - 30, pistolHeight);
};




//var nme = prompt("What is your character's name? (Max Length: 10)");
//var name = nme.substring(0, 10);
//alert("Your name is " + name);
