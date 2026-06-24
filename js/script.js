const completedStamps =
[1,6,7,19,30,76,77,78,80,81,82,88,
101,103,104,109,112,148,151];

const container =
document.getElementById("stempel-grid");

for(let i = 1; i <= 222; i++){

    const stamp =
    document.createElement("div");

    stamp.classList.add("stempel-item");

    if(completedStamps.includes(i)){
        stamp.classList.add("done");
    }

    stamp.textContent = i;

    container.appendChild(stamp);
}