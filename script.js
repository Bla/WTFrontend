const TABEL_BREEDTE = 7
const TABEL_HOOGTE = 6
const SPELER1_KLEUR = "red"

function maakTabel(tabelId) {
    var tabel = document.getElementById("gameTabel");
    console.log(tabel);
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
    var elem = document.getElementById(vakjeId);
    var gespeeld = elem.getAttribute("data-gespeeld");
    if (gespeeld == "none") {
        elem.bgColor = SPELER1_KLEUR;
        elem.style.border = "solid red";
        elem.setAttribute("data-gespeeld", "speler1");
    }
}

function tijdelijkVullen(vakjeId) {
    var elem = document.getElementById(vakjeId);
    var gespeeld = elem.getAttribute("data-gespeeld");
    if (gespeeld == "none") {
        elem.bgColor = SPELER1_KLEUR;
        elem.style.border = SPELER1_KLEUR;
    }
}

function vakjeReset(vakjeId) {
    var elem = document.getElementById(vakjeId);
    var gespeeld = elem.getAttribute("data-gespeeld");
    if (gespeeld == "none") {
    elem.bgColor = "white";
    elem.style.border = "solid black";
    }
}
