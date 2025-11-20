console.log("Hello World");
console.error("Hello World");
console.warn("Hello World");
console.table("Hello World");

// Uloha: Spočítej součet dvou čísel zadaných uživatelem
// Požádej uživatele o dvě čísla pomocí `prompt()` a vypiš jejich součet do konzole.
 

let num1 = Number(prompt("Zadej první číslo:"));
let num2 = Number(prompt("Zadej druhé číslo:"));
console.log("Součet je: " + (num1 + num2));
 
/*****************************************************************/
// Uloha: Zjisti, zda je číslo sudé nebo liché
/* 
    Požádej uživatele o číslo a zjisti, zda je sudé nebo liché.
    Výsledek zapiš do konzole.
*/
 
let cislo = Number(prompt("Zadej číslo:"));
if (cislo % 2 === 0) {
   console.log("Číslo je sudé");
} else {
   console.log("Číslo je liché");
}
 
 
/*****************************************************************/
// Uloha: Převod stupňů Celsia na Fahrenheity
/*
    Požádej uživatele o teplotu ve stupních Celsia a převeď ji na Fahrenheity.
    Vzorec: `F = C * 9/5 + 32`
*/
 
let celsius = Number(prompt("Zadej teplotu ve stupních Celsia:"));
let fahrenheit = celsius * 9/5 + 32;
console.log("Teplota ve Fahrenheitech: " + fahrenheit);
 
 
/*****************************************************************/
// Úloha: Zjisti, zda je číslo kladné, záporné nebo nula
/*
    Požádej uživatele o číslo. Do konzole vypiš zda:
    - číslo je kladné, záporné či je nula
*/
 
let cislo2 = Number(prompt("Zadej číslo:"));
if (cislo2 > 0) {
   console.log("Číslo je kladné");
} else if (cislo2 < 0) {
   console.log("Číslo je záporné");
} else {
    console.log("Číslo je nula")
 
}
 
 
/*****************************************************************/
// Úloha: Zjisti, zda zadané slovo obsahuje písmeno „a“
/**
* Požádej uživatele o slovo. Pomocí .include() zjisti,
* zda slovo obsahuje písmeno "a". Vypiš do konzole
*/
 
let slovo = prompt("Zadej slovo:");
if (slovo.includes("a")) 
 {console.log("Slovo obsahuje písmeno 'a'"); } 
 else {
  console.log("Slovo NEOBSAHUJE písmeno 'a'");
 }
 
 
/*****************************************************************/
// Uloha: Analyzátor textu
/**
* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
* Použij .include() nad zadaným slovem. Vypiš do konzole.
*/

let text = prompt("Zadej slovo pro analýzu:");
let vysledky = {};
for (let znak of text) {
   if (vysledky[znak]) {
       vysledky[znak]++;
   } else {
       vysledky[znak] = 1;
   }
}
console.log("Analýza textu:");
console.log(vysledky);

 
/*****************************************************************/
// 6️⃣ Zjisti, zda zadané číslo je prvočíslo
/**
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
* zda je číslo prvočíslo či nikoliv.
*/
 
// zde bude tvoje řešení
 
 
/*****************************************************************/
// Příklady na práci se **scope (zastínění proměnné)**
 
let x = 10; // globální scope
 
function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}
 
prikladScope();
console.log("Globální x: " + x); // 10
 
/*****************************************************************/
// Příklad **redeclaration proměnné**
 
var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10
 
// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci
 
/*****************************************************************/
// # 🔹 Rozdíl mezi `==` a `===`
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ