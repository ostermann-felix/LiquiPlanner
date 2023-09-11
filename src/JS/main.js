"use strict";

const haushaltsbuch = {
    gesamtbilanz: new Map(),
    eintraege: [],

    eintrag_erfassen()  {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt("Titel:"));
        neuer_eintrag.set("typ", prompt("Typ (Einnahme oder Ausgabe):"));
        neuer_eintrag.set("betrag", parseInt(prompt("Betrag (in € Cent):")));
        neuer_eintrag.set("datum", prompt("Datum (JJJJ-MM-TT):"));
        this.eintraege.push(neuer_eintrag);
    },

    eintraege_sortieren()   {
        this.eintraege.sort(function(eintrag_a, eintrag_b)  {
            if (eintrag_a.get("datum") > eintrag_b.get("datum"))  {
                return -1;
            }   else if (eintrag_a.get("datum") < eintrag_b.get("datum")) {
                return 1;
            }   else {
                return 0;
            }
        });
    },

    eintraege_ausgeben()  {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
            console.log(`Titel: ${eintrag.get("titel")}\n`
            + `Buchungytyp: ${eintrag.get("typ")}\n`
            + `Betrag: ${eintrag.get("betrag")} € Cent\n`
            + `Datum: ${eintrag.get("datum")}`);
        });
    },  

    gesamtbilanz_erstellen()    {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);

        this.eintraege.forEach(function(eintrag)   {
            switch (this.eintrag.get("typ")) {
                case "Einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                    neue_gesamtbilanz.bilanz += this.eintrag.get("betrag");
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                    break;
                default:
                    console.log(`Der Typ "${this.eintrag.get("typ")}" ist nicht bekannt.`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_ausgeben() {
        console.log(`Bilanz: ${this.gesamtbilanz.get("bilanz")} € Cent\n`
        + `Einnahmen: ${this.gesamtbilanz.get("einnahmen")} € Cent\n`
        + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")} € Cent\n`
        + `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") >= 0}`
        );
    },

    eintrag_hinzufuegen()   {
        let weiterer_eintrag = true;
        while(weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
        }
    }
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);