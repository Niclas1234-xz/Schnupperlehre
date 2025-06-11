const readline = require("readline-sync"); // Modul einbinden
let user = readline.question("Wie heisst du? "); // Benutzer wird gefragt

if (user === "Fritz") {
  console.log("Hallo Fritz!");
} else {
  let age = readline.question("Wie alt bist du? "); // Benutzer wird gefragt
  console.log("Du bist " + age + " alt ");
}

function Name() {
  let user = readline.question("Wie heisst du? "); // Benutzer wird gefragt

  if (user === "Fritz") {
    console.log("Hallo Fritz!");
  } else {
    let age = readline.question("Wie alt bist du? "); // Benutzer wird gefragt
    console.log("Du bist " + age + " alt ");
  }
}

for (let i = 1; i <= 5; i++) {
  console.log(+i);
}

let AnzahlRichtige = 0;

let ask = readline.question("Wie gross ist das höchste Gebäude der Welt? "); // Benutzer wird gefragt

if (ask === "828") {
  console.log("Das ist richtig");

  AnzahlRichtige++;
} else {
  console.log("Das ist leider falsch");
}

let aa = readline.question("Was ist die Haupstadt der Schweiz? "); // Benutzer wird gefragt

if (aa === "Bern") {
  console.log("Das ist richtig");
  AnzahlRichtige++;
} else {
  console.log("Das ist leider falsch");
}

let abc = readline.question("Für was steht SBB? "); // Benutzer wird gefragt

if (abc === "Schweizer Bundes Bahnen") {
  console.log("Das ist richtig");
  AnzahlRichtige++;
} else {
  console.log("Das ist leider falsch");
}
console.log("Deine Punktzahl ist " + AnzahlRichtige);



