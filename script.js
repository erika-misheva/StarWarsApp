let peopleBtn = document.getElementById("peopleBtn");
let result = document.getElementById("result");
let loader = document.getElementById("loader");
let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");
let shipBtn = document.getElementById("ships");

peopleBtn.addEventListener("click", getPeople);
let load = false;
function loading() {
    if (load === true) {
        loader.style.display = "block";
    } else {
        loader.style.display = "none";
    }
}


let pageCounter = 1;
function getPeople() {
    load = true;
    loading();
    let peopleUrl = "https://swapi.dev/api/people/?page=" + pageCounter;
    const response = fetch(peopleUrl)
        .then(function (responese) { //response e paketot json sto ke go dobieme
            return responese.json(); // ne mozeme da go citame pa ja manupolirame i ja koristime posle
        })
        .then(function (response) {
            console.info("The Request succeded!");
            console.log(response);

            createPeopleTabel(response);

            return response;
        })
        .catch(function (err) {
            console.log("The request has faild//an error has occurd");
            console.log(err);
        })

    console.log(`Page counter: ${pageCounter}`);
    return response;
}

function createPeopleTabel(people) {
    result.innerHTML = "";
    load = false;
    loading();
    let table = document.createElement("table");

    let tableheader = document.createElement("thead");
    tableheader.innerHTML += `<td>Name</td> 
    <td>Height</td> 
    <td>Мass</td> 
    <td>Gender</td> 
    <td>Birth Year</td>
    <td>Appearances </td>`;
    table.appendChild(tableheader);
    let tbody = document.createElement("tbody");
    for (i = 0; i < people.results.length; i++) {
        tbody.innerHTML += `<tr>
            <td> ${people.results[i].name} </td> 
            <td> ${people.results[i].height} </td> 
            <td> ${people.results[i].mass} </td>
            <td> ${people.results[i].gender} </td> 
            <td> ${people.results[i].birth_year} </td>
            <td> ${people.results[i].films.length} </td>
        </tr> `;
    }
    previousBtn1.style.display = "none";
    nextBtn1.style.display = "none";
    table.appendChild(tbody);
    result.appendChild(table);
    if (people.previous != null) {
        previousBtn.style.display = "block";
    }
    else {
        previousBtn.style.display = "none";
    }

    if (people.next != null) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }
}

previousBtn.addEventListener("click", () => {
    console.log("i am in previous");
    pageCounter--;
    getPeople();
})
nextBtn.addEventListener("click", () => {
    console.log("i am in next");
    pageCounter++;
    getPeople()

});

let pageCounter1 = 1;

shipBtn.addEventListener("click", getShips);
function getShips() {
    load = true;
    loading();

    let shipUrl = "https://swapi.dev/api/starships/?page=" + pageCounter1;
    const response = fetch(shipUrl)
        .then(function (responese) { //response e paketot json sto ke go dobieme
            return responese.json(); // ne mozeme da go citame pa ja manupolirame i ja koristime posle
        })
        .then(function (response) {
            console.info("The Request succeded!");
            console.log(response);

            createShipTable(response);

            return response;
        })
        .catch(function (err) {
            console.log("The request has faild//an error has occurd");
            console.log(err);
        })

    console.log(`Page counter: ${pageCounter}`);
    return response;
}

function createShipTable(ships) {
    result.innerHTML = "";
    load = false;
    loading();
    let table = document.createElement("table");

    let tableheader = document.createElement("thead");
    tableheader.innerHTML += `<td>Name</td> 
    <td>Model</td> 
    <td>Manufacturer</td> 
    <td>Cost</td> 
    <td>People Capacity</td>
    <td>Class </td>`;
    table.appendChild(tableheader);
    let tbody = document.createElement("tbody");
    for (i = 0; i < ships.results.length; i++) {
        tbody.innerHTML += `<tr>
            <td> ${ships.results[i].name} </td> 
            <td> ${ships.results[i].model} </td> 
            <td> ${ships.results[i].manufacturer} </td>
            <td> ${ships.results[i].cost_in_credits} </td> 
            <td> ${ships.results[i].crew} Crew and ${ships.results[i].passengers} Passangers</td>
            <td> ${ships.results[i].starship_class} </td>
        </tr> `;
    }

    table.appendChild(tbody);
    result.appendChild(table);
    previousBtn.style.display = "none";
    nextBtn.style.display = "none";
    previousBtn.style.display = "none";
    nextBtn.style.display = "none";
    if (ships.previous != null) {
        previousBtn1.style.display = "block";
    }
    else {
        previousBtn1.style.display = "none";
    }

    if (ships.next != null) {
        nextBtn1.style.display = "block";
    }
    else {
        nextBtn1.style.display = "none";
    }
}

previousBtn1.addEventListener("click", () => {
    console.log("i am in previous");
    pageCounter1--;
    getShips();
})
nextBtn1.addEventListener("click", () => {
    console.log("i am in next");
    pageCounter1++;
    getShips()

});






