import "./stamps.js";
import { stamps } from "./stamps.js";

const container =
document.getElementById("stempel-grid");

stamps.forEach(stampData => {
    const stamp =
        document.createElement("div");
    stamp.classList.add("stempel-item");
    if(stampData.visited){
        stamp.classList.add("done");
    }
    stamp.textContent =
        stampData.id;
    stamp.title =
        stampData.name;
    container.appendChild(stamp);

});

const collectedStamps =
    stamps.filter(
        stamp => stamp.visited
    ).length;

const totalStamps =
    stamps.length;

document.getElementById(
    "stamp-counter"
).textContent =
    `Stempel gesammelt: ${collectedStamps} von ${totalStamps}`;
function updateStampCounter() {

    const collected =
        stamps.filter(
            stamp => stamp.visited
        ).length;

    document.getElementById(
        "stamp-counter"
    ).textContent =
        `Stempel gesammelt: ${collected} von ${stamps.length}`;
}
updateStampCounter();


//Berechnung Fortschritt Abzeichen
const bronzeNeeded = 8;
const silverNeeded = 16;
const goldNeeded = 24;
const prinzNeeded = 11;
const koenigNeeded = 50;
const steigerNeeded = 111;
const rucksackNeeded = 100;
const schuhNeeded = 150;
const kaiserNeeded = 222;

const collected =
    stamps.filter(
        stamp => stamp.visited
    ).length;

const remainingBronze =
    Math.max(
        0,
        bronzeNeeded - collected
    );
const remainingSilber =
    Math.max(
        0,
        silverNeeded - collected
    );
const remainingGold =
    Math.max(
        0,
        goldNeeded - collected
    );
const remainingKaiser =
    Math.max(
        0,
        kaiserNeeded - collected
    );
const remainingPrinz =
    Math.max(
        0,
        prinzNeeded - collected
    );
const remainingKoenig =
    Math.max(
        0,
        koenigNeeded - collected
    );
const remainingSteiger =
    Math.max(
        0,
        steigerNeeded - collected
    );
const remainingRucksack =
    Math.max(
        0,
        rucksackNeeded - collected
    );
const remainingSchuh =
    Math.max(
        0,
        schuhNeeded - collected
    );

document
    .getElementById("Bronzeabzeichen")
    .title =
    `Noch ${remainingBronze} Stempel bis Bronzeabzeichen`;

document
    .getElementById("Silberabzeichen")
    .title =
    `Noch ${remainingSilber} Stempel bis Silberabzeichen`;

document
    .getElementById("Goldabzeichen")
    .title =
    `Noch ${remainingGold} Stempel bis Goldabzeichen`;
document
    .getElementById("Wanderkoenig")
    .title =
    `Noch ${remainingKoenig} Stempel bis Wanderkönig`;

    document
    .getElementById("Kaiserrucksack")
    .title =
    `Noch ${remainingRucksack} Stempel bis Wanderrucksack`;

    document
    .getElementById("Kaiserwanderschuh")
    .title =
    `Noch ${remainingSchuh} Stempel bis Kaiserwanderschuh`;

    document
    .getElementById("Prinz")
    .title =
    `Noch ${remainingPrinz} Stempel bis Wanderprinz:essin`;

    document
    .getElementById("Steiger")
    .title =
    `Noch ${remainingSteiger} Stempel bis  Harzer Steiger`;

    document
    .getElementById("Kaiser")
    .title =
    `Noch ${remainingKaiser} Stempel bis Wanderkaiser`;