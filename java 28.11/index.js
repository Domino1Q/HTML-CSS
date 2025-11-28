let soucin = 1;
let cislo;
while (true) {
    
    cislo = Number(prompt("Zadej číslo: "));

    if (cislo == 0) {
        break;
    }

    soucin *= cislo;
}

console.log("Součin zadaných čísel je: ")