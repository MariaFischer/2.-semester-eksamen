const FORMULAR = document.getElementById("form");

FORMULAR.addEventListener("submit", function () {
    event.preventDefault();
    const DATO = document.getElementById("dato").value;
    const TIDSPUNKT = document.getElementById("tidspunkt").value;
    const NAVN = document.getElementById("navn").value;
    const TELEFONNUMMER = document.getElementById("telefonnummer").value;
    sessionStorage.setItem("dato", DATO);
    sessionStorage.setItem("tidspunkt", TIDSPUNKT);
    sessionStorage.setItem("navn", NAVN);
    sessionStorage.setItem("telefonnummer", TELEFONNUMMER);

    const INDKOEBSKURV = [];
    const INPUTELEMENTS = document.getElementsByClassName('checkboks');
    for (let i = 0; INPUTELEMENTS[i]; ++i) {
        if (INPUTELEMENTS[i].checked) {
            INDKOEBSKURV[i] = INPUTELEMENTS[i].value;
        }
    }

    sessionStorage.setItem("lashliste", JSON.stringify(INDKOEBSKURV));
    
    window.location.replace("bekraeftigelse.html");
})
