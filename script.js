const TABEL_BREEDTE = 7
const TABEL_HOOGTE = 6
const SPELER1_KLEUR = "red"
const SPELER2_KLEUR = "yellow"
var speler = 1   // speler1 = 1, speler2 = 2
var naamSpeler1
var naamSpeler2

function tabelMaken() {
    var tabel = document.getElementById('game-tabel');
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

function starten() {
    naamSpeler1 = document.getElementById('naam1').value;
    naamSpeler2 = document.getElementById('naam2').value;
    document.getElementById('game-tekst').innerHTML = naamSpeler1;
    document.getElementById('game-container').style.visibility = "visible";
    document.getElementById('invoer').style.display = "none";
    document.getElementById('display').style.display = "flex";
    console.log(naamSpeler1,naamSpeler2)
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
            document.getElementById('game-tekst').innerHTML = naamSpeler2;
            speler = 2;
        }
        else if (speler == 2) {
            ondersteVakje.bgColor = SPELER2_KLEUR;
            ondersteVakje.style.border = "solid " + SPELER2_KLEUR;
            ondersteVakje.setAttribute("data-gespeeld", "speler2");
            document.getElementById('game-tekst').innerHTML = naamSpeler1;
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