"use strict";

const haushaltsbuch = {
    gesamtbilanz: {
        bilanz: 0,
        einnahmen: 0,
        ausgaben: 0,
    },
    eintraege: [

    ],

    eintrag_erfassen()  {
        this.eintraege.push(
            {
            titel: prompt("Titel:"),
            typ: prompt("Typ (Einnahme oder Ausgabe):"),
            betrag: parseInt(prompt("Betrag (in € Cent):")),
            datum: prompt("Datum (JJJJ-MM-TT):")
            }
        );
    },

    eintraege_sortieren()   {
        this.eintraege.sort(function(eintrag_a, eintrag_b)  {
            if (eintrag_a.datum > eintrag_b.datum)  {
                return -1;
            }   else if (eintrag_a.datum < eintrag_b.datum) {
                return 1;
            }   else {
                return 0;
            }
        });
    },

    eintraege_ausgeben()  {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
            console.log(`Titel: ${eintrag.titel}\n`
            + `Buchungytyp: ${eintrag.typ}\n`
            + `Betrag: ${eintrag.betrag} € Cent\n`
            + `Datum: ${eintrag.datum}`);
        });
    },  

    gesamtbilanz_erstellen()    {
        let neue_gesamtbilanz = {
            bilanz: 0,
            einnahmen: 0,
            ausgaben: 0
        }
        this.eintraege.forEach(function(eintrag)   {
            switch (this.eintrag.typ) {
                case "Einnahme":
                    neue_gesamtbilanz.einnahmen += this.eintrag.betrag;
                    neue_gesamtbilanz.bilanz += this.eintrag.betrag;
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.ausgaben -= this.eintrag.betrag;
                    neue_gesamtbilanz.bilanz -= this.eintrag.betrag;
                    break;
                default:
                    console.log(`Der Typ "${this.eintrag.typ}" ist nicht bekannt.`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_ausgeben() {
        console.log(`Bilanz: ${this.gesamtbilanz.bilanz} € Cent\n`
        + `Einnahmen: ${this.gesamtbilanz.einnahmen} € Cent\n`
        + `Ausgaben: ${this.gesamtbilanz.ausgaben} € Cent\n`
        + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
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