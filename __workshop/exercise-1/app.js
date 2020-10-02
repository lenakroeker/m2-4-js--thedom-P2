// Preset values
const FROGS = 4;
const track = document.querySelector("ol");
const rankings = document.querySelector("#rankNames");

for (i = 1; i <= FROGS; i++) {
    const lane = document.createElement("li");
    lane.id = `lane-${i}`
    const liSpan = document.createElement("span");
    lane.appendChild(liSpan);
    liSpan.innerText = i;
    track.appendChild(lane);
}

let racers = [];
let f = 0;

while (f < FROGS) {
    const randfrogindex = [Math.floor(Math.random() * frogstable.length)]
    if (!racers.includes(frogstable[randfrogindex])) {
        racers.push(frogstable[randfrogindex]);
        f++
    }

}

console.log(racers);

racers.forEach(function (racer, index) {
    //add number
    const numspan = document.createElement("span");
    numspan.setAttribute("id", `frog-${racer.number}`)
    numspan.innerText = `${racer.number}`;
    numspan.style.backgroundColor = `${racer.color}`;
    document.querySelector(`#lane-${index + 1}`).appendChild(numspan);
    numspan.classList.add("frog");
    //add name
    const namespan = document.createElement("span");
    namespan.innerText = `${racer.name}`;
    namespan.classList.add("frog-name");
    document.querySelector(`#lane-${index + 1}`).appendChild(namespan);

    //progress
    racer.progress = 0;
    racer.lane = `lane-${index + 1}`;
})

//hop along function

function racingFrog(racer) {
    console.log("racingFrog() ", racer);
    const trackWidth = track.offsetWidth;
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress += hopLength;
        console.log(`${racer.name} is at ${racer.progress}`);
        if (racer.progress >= 100) {
            racer.progress = 100;
            clearInterval(hop)
            console.log(`${racer.name} has finished!`);
            rankings.innerHTML += `${racer.name} </br>`;
        }
        document.getElementById(`frog-${racer.number}`).style.left = `${racer.progress}%`;
    }, Math.random() * 500);

}


racers.forEach(racer => racingFrog(racer));

