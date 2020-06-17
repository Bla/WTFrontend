const SPELER1_KLEUR = "red"

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
