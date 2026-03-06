// Snack 1
let genericData: unknown

if (typeof genericData === "string") {
  console.log(genericData.toUpperCase());
} else if (typeof genericData === "number") {
  console.log(genericData * 2);
} else if (typeof genericData === "boolean") {
  console.log(genericData ? "Si" : "No");
} else {
  console.log("Tipo non supportato");
}


// Snack 2
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[]
}

const user: Dipendente = {
  nome: "Massimo",
  cognome: "Ceccherini",
  annoNascita: 1958,
  sesso: "m",
  anniDiServizio: [1979, 1980, 1985, 1988]
}

console.log(user);
