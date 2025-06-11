const readline = require("readline-sync"); // Modul einbinden

function Fritz() {
  let cbcc = readline.question("Wie heisst du? "); // Benutzer wird gefragt

  if (cbcc === "Fritz") {
    console.log("Hallo Fritz, Hallo Fritz, Hallo Fritz");
  } else {
    console.log("Hallo, Hallo, Hallo");
  }
}
Fritz();
Fritz();
Fritz();

let result2 = 0;

let aa = readline.question("Nenne eine Zahl: ");
while (aa !== "Stop") {
  aa = readline.question("Nenne eine Zahl: ");
  result2 += +aa;
  console.log("Dein Resultat ist " + result2);
}
