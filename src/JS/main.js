"use strict";

let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel, 
    typ, 
    betrag, 
    datum;

const eintrag_erfassen = function() {
    titel = prompt("Titel:");
    typ = prompt("Typ (Einnahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag (in € Cent):"));
    datum = prompt("Datum (JJJJ-MM-TT):")
};

eintrag_erfassen();

console.log(`Titel: ${titel}
            Buchungytyp: ${typ}
            Betrag: ${betrag} ct
            Datum: ${datum}`);

let titel2 = prompt("Titel:");
let typ2 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag2 = parseInt(prompt("Betrag: (In Eurocent)"));
let datum2 = prompt("Datum (JJJJ-MM-TT)");

if  (typ2 == "Einnahme")    {
    einnahmen = einnahmen + betrag;
    bilanz = bilanz + betrag2;
}   else if (typ2 === "Ausgabe")    {
    ausgaben = ausgaben + betrag2;
    bilanz = bilanz + betrag2;
}   else    {
    console.log(`Der Typ "${typ2}" ist nicht bekannt.`);
}

console.log(`Datum: ${datum2}
Buchungytyp: ${typ2}
Betrag: ${betrag2} ct
Datum: ${datum2}`);

//Gesamtbilanz
console.log(`Bilanz: ${bilanz} ct`);