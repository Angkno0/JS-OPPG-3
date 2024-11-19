// OPPG1

// Variabler og Datatyper
// Opprett en variabel som inneholder navnet ditt og skriv det ut i konsollen.

let navn ="Angelica Karen Knotten";
console.log(navn);

// Lag en funksjon som tar to tall som argumenter og returnerer summen.

function summer(numb1, numb2){
return numb1 + numb2;
}

let fullPot = summer(4,7);

console.log("summen er " + fullPot);

console.log(print);
// OPPG2

// Beregning av alder
// Lag en funksjon som tar fødselsår som number input og returnerer alderen i år, og skriv ut teksten "Jeg er X år gammel".
// Her kan du hardkode 2024 som gjeldende år. 

function age(fodselsar){
    const dagensDato = new Date();
    const arnaa = dagensDato.getFullYear();
    const alder= arnaa - fodselsar;

    console.log(`jeg er ${alder} år gammel`);
    return alder;

}

age(2005);

console.log(print);
// OPPG3

// Betinget Logikk
// Lag en funksjon som sjekker om et tall er positivt, negativt eller null.

// function negativtEllerPositivt (tall){
// if(tall > 0) {
//     return "tallet er positivt"
// } else if (tall < 0) {
//     return "tallet er negativt"
// } else{
//     return "tallet er ikkje negativt eller positivt"
// }
// }

// let resultat = negativtEllerPositivt(-10);
// console.log(resultat);

// resultat= negativtEllerPositivt(5);
// console.log(resultat);

// resultat =negativtEllerPositivt(0);
// console.log(resultat);

// console.log(print);
// OPPG4

// Løkker
// Skriv ut alle tall fra 1 til 20 med en for-løkke.
// Lag en funksjon som returnerer summen av alle partall mellom 1 og 100.

// for(let i =1; i <= 20; i++){
//     console.log(i);
// }

// console.log(print);

// function finnPrimTall(tall){
//     const charLowerCase =char.toLowerCase();
//     const prim="2468101214161820222426283032343638404244464850525456586062646668707274767880828486889092949698100"
//     const v =["2", "4", "6", "8 ","10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "98", "100"];
//     if(v.includes(charLowerCase)){
      
//         if(prim.includes(charLowerCase)){
//             return "prim";

//         }else{
//             return "oddetall";
//         }
//     }
// }
// if(v.includes(charLowerCase))

//  function sjekkVocal(char) {
//      const charLowerCase = char.toLowerCase();
//      const vocals = "aeiuyæøå";
//       const v = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"];
//       if(v.includes(charLowerCase)){
//      if(vocals.includes(charLowerCase)){
//         return "vokal";
//      }else{
//         return "konsonant";
//      }
    
//     }
// }

// const vocals = "aeiuyæøå";
// OPPG5 LETT

// Lag en funksjon som tar en streng som input og returnerer den omvendte strengen.
// Lag en funksjon som bytter om det 3 og 5 og 7 tegnet i en input string. Rekkefølgen blir 5,7,3. Funksjonen skal gi feilmelding hvis dette ikke går.


function omvendStreng(tall) {
    return tall.split('').reverse().join('');//puts the text back together
}

// Eksempel på bruk
let result = omvendStreng("3, 5, 7");
console.log(result); // "7, 5, 3"


 console.log(print);
// OPPG6 LETT

// Array Manipulering
// Lag en funksjon som finner medianen av alle tallene i en liste (array).
// Lag en funksjon som returnerer antall unike verdier i et array.

function median(numbers){
const sorted = Array.from(numbers).sort((a, b) => a-b);
const middle = Math.floor(sorted.length/2);
if(sorted.length %2 === 0){
    return(sorted[middle - 1] + sorted[middle]) /2;
}
return sorted [middle];
}

const array = [1, 3, 7, 9 ,5]
console.log("median:", median(array));

console.log(print);

// OPPG7

// Seleksjonsstrukturer
// Lag en funksjon som sjekker om et gitt år er et skuddår.
// Lag en funksjon som som tar en string med tegn bestående kun av "><v^". Hvert av disse tegnene representerer en retning. Skriv ut retningene med tekst for stringen. 

function skuddår(år){
const erSkuddår = (år % 4 === 0  &&(år % 100  || år % 400 === 0));

return !erSkuddår;
}

console.log(skuddår(2024));
console.log(skuddår(2023));

console.log(print);
// OPPG8

// Matematiske Beregninger
// Lag en funksjon som beregner faktorialen til et tall. I matematikken brukes ! som tegn for faktorial. En faktorial til tallet 10 er: 10! = 1*2*5. Faktorialer kan kun bestå av primtall. 12! = 1*2*2*3.

faktorial = 1;

function factor(){

}

// OPPG9

// Beregning av alder
// Lag en funksjon som tar fødselsdato som string input og returnerer alderen i år, måneder og dager basert på dagens dato.
// Sjekk ut Date objektet ved f.eks. console.log(new Date().toString());

function ageCalc(fodselsdatostr){
 const fodselsdato = new Date(fodselsdatostr);
 const today = new Date();

 let year = today.getFullYear() - fodselsdato.getFullYear();
 let month = today.getMonth() - fodselsdato.getMonth();
 let day = today.getDay() - fodselsdato.getDay();

 if (day < 0){
    month -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    day += 12;
 }
 return {year, month, day};

}


const alder = ageCalc("2005-09-06");
console.log(`alder: ${alder.year} year, ${alder.month} months and ${alder.day} days.`);

console.log(print);

// OPPG10

// Array-søk
// Lag en funksjon som tar et array og en verdi som input og sjekker om verdien finnes i arrayet (returner true eller false).

function finnArray(){
    const cars =["volvo", "saab", "BMW", "opel"];
    
}


// OPPG1 MIDDELS

// Fibonacci-sekvens
// Lag en funksjon som returnerer de første x tallene i Fibonacci-sekvensen, der x er et heltall som sendes inn som parameter.

function Fibonacci(num) {
    let num1 =0;
    let num2= 1;
    let sum;
    if(num === 1){
        return num1;
    }else if (num === 2) {
        return num2;
        }else {
            for(let i =3; i <= num; i++){
                sum= num1 + num2;
                num1= num2;
                num2= sum;
            }
            return num2;
        }
}

console.log("Fibonacci(5): " + Fibonacci(5));
console.log("fibonacci(8): " + Fibonacci(8));

console.log(print);

// OPPG2 MIDDELS

// Palindromsjekk
// Lag en funksjon som sjekker om en gitt streng er et palindrom.

function pali(str){
    return true;
}
pali("eye");


// OPPG3 MIDDELS

// Matrise (2D Array) Summering
// Lag en funksjon som summerer alle verdiene i en todimensjonal matrise (array av arrays).



// OPPG4 MIDDELS

// Sortering
// Lag en funksjon som sorterer en liste med tall uten å bruke innebygde sorteringsfunksjoner (bruk f.eks. boblesortering).



// OPPG5 MIDDELS

// Filtrering av objekter i array
// Lag en funksjon som tar en liste med objekter og filtrerer ut de objektene som oppfyller en bestemt betingelse.

function filterObjects(list, condition){
    return list.filter(condition);
}

const people=[
    {name: "carla", age: 45},
    {name: "darleen", age: 56},
    {name: "cosette", age:19},
    {name: "jeff", age: 14}
    ];
    const adult =filterObjects(people, person => person.age >= 45);

    console.log(adult);
    console.log(print);


    // OPPG6 MIDDELS
    
//     Telle forekomst
// Lag en funksjon som teller antall forekomster av hvert tegn i en streng.

    // OPPG7

    // Gruppe Array-elementer
    // Lag en funksjon som grupperer like verdier i et array i separate arrays (f.eks. [1, 2, 2, 3, 3, 3] blir [[1], [2, 2], [3, 3, 3]]).

// OPPG8 MIDDELS

// Summere tall i en tekst
// Lag en funksjon som tar en streng med tall og bokstaver, og returnerer summen av alle tallene i strengen.

// OPPG9 MIDDELS

// Temperaturkonvertering
// Lag funksjoner som konverterer temperaturer mellom Celsius, Fahrenheit og Kelvin.