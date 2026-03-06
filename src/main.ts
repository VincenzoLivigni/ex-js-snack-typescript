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