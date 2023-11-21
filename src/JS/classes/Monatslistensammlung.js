"use strict";

class Monatslistensammlung {

    constructor() {
        this._monatslisten = [];
        this._html = this._html_generieren();
    }

    eintrag_hinzufuegen(eintrag) {
        // Werte für Monat und Jahr holen
        let eintragsmonat = eintrag.datum().toLocaleString("de-DE", {month: "numeric"});
        let eintragsjahr = eintrag.datum().toLocaleString("de-DE", {year: "numeric"});
        // prüfen, ob Monatsliste schon vorhanden ist
        let monatsliste_vorhanden = false;
        this._monatslisten.forEach(monatsliste => {
            if (eintragsmonat === monatsliste.monat() && eintragsjahr === monatsliste.jahr()) {
                monatsliste.eintrag_hinzufuegen(eintrag);
                monatsliste_vorhanden = true;
            }
        });
        if (!monatsliste_vorhanden) {
            this._monatsliste_hinzufuegen(eintragsjahr, eintragsmonat, eintrag);
        }
            // wenn vorhanden: Eintrag zu Monatsliste hinzufuegen -> monatsliste.eintrag_hinzufuegen(eintrag)
            // wenn NICHT vorhanden: neue Monatsliste instaziieren -> this._monatsliste_hinzufuegen()
    }

    _monatsliste_hinzufuegen(jahr, monat, eintrag) {
        let neue_monatsliste = new Monatsliste(jahr, monat);
        neue_monatsliste.eintrag_hinzufuegen(eintrag);
        this._monatslisten.push(neue_monatsliste);
    }

    _html_generieren() {
        let monatslisten = document.createElement("section");
        monatslisten.setAttribute("id", "monatslisten");
        this._monatslisten.forEach(monatsliste => monatslisten.insertAdjacentElement("beforeend", monatsliste.html()));

        return monatslisten;
    }

    anzeigen() {
        let eingabeformular_container = document.querySelector("#eingabeformular-container");
        let monatslistensammlung = document.querySelector("#monatslisten");
        if (eingabeformular_container !== null) {
            if (monatslistensammlung !== null) {
                monatslistensammlung.remove();
            }
            eingabeformular_container.insertAdjacentElement("afterend", this._html);
        }
    }

    
}