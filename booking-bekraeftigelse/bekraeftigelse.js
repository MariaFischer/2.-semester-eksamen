const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML("beforeend", `Dato: ${sessionStorage.getItem('dato')}`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<br>Tidspunkt: ${sessionStorage.getItem('tidspunkt')}`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<br>Navn: ${sessionStorage.getItem('navn')}`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<br>Telefonnummer:  ${sessionStorage.getItem('telefonnummer')}`);
const retrievedData = sessionStorage.getItem("lashliste");
const liste = JSON.parse(retrievedData);

// udskrivning af liste til skærm
for (let i = 0; i < liste.length; i++) {
    if (liste[i] != null) {
        LEJEASIDE.insertAdjacentHTML("beforeend", `<li style="margin-left: 15px;">${liste[i]}</li>`);
    }
}

