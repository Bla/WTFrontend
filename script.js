const TABEL_BREEDTE = 7
const TABEL_HOOGTE = 6
const SPELER1_KLEUR = "red"
const SPELER2_KLEUR = "yellow"
var speler = 1   // speler1 = 1, speler2 = 2

function tabelMaken(tabelId) {
    var tabel = document.getElementById(tabelId);
    for (var y=0; y<TABEL_HOOGTE; y++) {
        var rij = document.createElement("tr");
        tabel.appendChild(rij);
        for (var x=0; x<TABEL_BREEDTE; x++) {
            var id = "vakje" + x + y;
            var kolom = document.createElement("td");
            kolom.setAttribute("id", id);
            kolom.setAttribute("data-gespeeld", "none");
            kolom.setAttribute("onmouseover", "tijdelijkVullen(this.id)");
            kolom.setAttribute("onmouseout", "vakjeReset(this.id)");
            kolom.setAttribute("onclick","vakjeVullen(this.id)");
            rij.appendChild(kolom);
        }
    }
}

function vakjeVullen(vakjeId) {
    var huidigeVakje = document.getElementById(vakjeId);
    var gespeeld = huidigeVakje.getAttribute("data-gespeeld");
    if (gespeeld == "none") {
        var ondersteVakje = document.getElementById(zwaartekracht(vakjeId));
        if (speler == 1){
            ondersteVakje.bgColor = SPELER1_KLEUR;
            ondersteVakje.style.border = "solid " + SPELER1_KLEUR;
            ondersteVakje.setAttribute("data-gespeeld", "speler1");
            speler = 2;
        }
        else if (speler == 2) {
            ondersteVakje.bgColor = SPELER2_KLEUR;
            ondersteVakje.style.border = "solid " + SPELER2_KLEUR;
            ondersteVakje.setAttribute("data-gespeeld", "speler2");
            speler = 1;
        }
    }
}

function tijdelijkVullen(vakjeId) {
    var elem = document.getElementById(vakjeId);
    var gespeeld = elem.getAttribute("data-gespeeld");
    if (gespeeld == "none") {
        var ondersteVakje = document.getElementById(zwaartekracht(vakjeId));
        if (speler == 1){
            ondersteVakje.bgColor = SPELER1_KLEUR;
            ondersteVakje.style.border = "solid " + SPELER1_KLEUR;
        }
        if (speler == 2) {
            ondersteVakje.bgColor = SPELER2_KLEUR;
            ondersteVakje.style.border = "solid " + SPELER2_KLEUR;
        }
    }
}

function vakjeReset(vakjeId) {
    var elem = document.getElementById(vakjeId);
    var gespeeld = elem.getAttribute("data-gespeeld");
    if (gespeeld == "none") {
        var ondersteVakje = document.getElementById(zwaartekracht(vakjeId));
        ondersteVakje.bgColor = "white";
        ondersteVakje.style.border = "solid black";
    }
}

function zwaartekracht(vakjeId) {
    var ondersteVakje = vakjeId;
    var vakjeX = parseInt(vakjeId.slice(-2, -1));
    var vakjeY = parseInt(vakjeId.slice(-1));
    if (vakjeY<TABEL_HOOGTE-1){
        for (var y=vakjeY; y<TABEL_HOOGTE-1; y++){
            var volgendeY = y + 1;
            var volgendeRij = "vakje" + vakjeX + volgendeY;
            var gespeeld = document.getElementById(volgendeRij).getAttribute("data-gespeeld");
            if (gespeeld == "none") {
                ondersteVakje = volgendeRij;
            }
        }
    }
    return ondersteVakje;
}