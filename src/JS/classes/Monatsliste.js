"use strict";
class Monatsliste {

    constructor(jahr, monat) {
        this._jahr = jahr;
        this._monat = monat;
        this._eintraege = [];
        this._bilanz = 0;
        this._html = this._html_generieren();
    }

    monat() {
        return this._monat;
    }

    jahr() {
        return this._jahr;
    }

    eintrag_hinzufuegen(eintrag) {
        this._eintraege.push(eintrag);
    }

    _html_generieren() {
        
    }

    
}