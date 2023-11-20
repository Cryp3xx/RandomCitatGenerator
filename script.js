const citaty = [
    "Čtenář prožije tisíc životů, než zemře. Člověk, jenž nikdy nečte, prožije jen jeden. —George R. R. Martin",
    "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít. —Jan Werich",
    "Ne všichni, kdo bloudí, jsou ztraceni. —J. R. R. Tolkien",
    "Dobré knihy neprozradí všechna svá tajemství najednou. —Stephen King",
    "Až ti bude v životě nejhůř, otoč se ke slunci a všechny stíny padnou za tebe. —John Lennon",
    "Usmívej se na toho, kdo ti nejvíc ublížil, aby neviděl, jak moc tě to bolí. —Božena Němcová",
    "Monstra jsou skutečná a duchové také. Žijí uvnitř nás a někdy vyhrávají. —Stephen King",
    "Člověk miluje, protože miluje. Není k tomu žádný důvod. —Paulo Coelho",
    "Stáváš se navždy zodpovědným za to, cos k sobě připoutal. —Antoine de Saint-Exupéry",
    "Jediný sen je silnější, než tisíce skutečností. —J. R. R. Tolkien",
    "Všechno je Fandova chyba -Všichni"
]

function citatfunction() {
    const citatElement = document.getElementById("citat");
    const randomIndex = Math.floor(Math.random() * citaty.length);
    const randomCitat = citaty[randomIndex];
    citatElement.textContent = randomCitat;
}

let lastRandomIndex;

function citatfunction() {
    const citatElement = document.getElementById("citat");
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * citaty.length);
    } while (randomIndex === lastRandomIndex);

    lastRandomIndex = randomIndex;

    const randomCitat = citaty[randomIndex];
    citatElement.textContent = randomCitat;
}

function addCitat() {
    const newCitat = prompt("Zadej nový citát:");
    if (newCitat) {
        citaty.push(newCitat);
    }
}

function removeCitat() {
    const indexToRemove = prompt("Zadej číslo pořadí citátu");
    if (indexToRemove !== null && indexToRemove !== "" && !isNaN(indexToRemove)) {
        const index = parseInt(indexToRemove, 10);
        if (index >= 0 && index < citaty.length) {
            citaty.splice(index, 1);
        } else {
            alert("Neplatné číslo.");
        }
    } else {
        alert("Neplatné číslo.");
    }
}