const SPELER1_KLEUR = "red"

function vakjeVullen(vakjeId) {
    var elem = document.getElementById(vakjeId);
    elem.bgColor = SPELER1_KLEUR;
    elem.style.border = "solid red";
}
