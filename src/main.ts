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

// Snack 3
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[],
}

type ProjectManager = Dipendente & {
  teamSize: number,
  budgetGestito?: number,
  stakeholderPrincipali: string[],
}