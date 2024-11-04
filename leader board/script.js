let button = document.querySelector('button');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let country = document.querySelector('.country');
let score = document.querySelector('.score');
let container = document.querySelector('.container');
let playerList = [];

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (fname.value === "" || lname.value === "" || score.value === "" || country.value === "") {
        alert("Please fill out all fields");
    } else {
        let Mdate = new Date();
        let a = Mdate.getDate();
        let b = Mdate.getMonth() + 1;
        let c = Mdate.getFullYear();
        
        let player = {
            name: `${fname.value} ${lname.value}`,
            country: country.value,
            date: `${a}-${b}-${c}`,
            score: parseInt(score.value)
        };

        playerList.push(player);
        updateData();

        fname.value = "";
        lname.value = '';
        country.value = "";
        score.value = "";
    }
});

function updateData() {
    container.style.display = playerList.length > 0 ? "block" : "none";
    container.innerHTML = '';

    playerList.sort((player1, player2) => player2.score - player1.score);

    playerList.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let nameDiv = document.createElement("div");
        nameDiv.innerText = `${item.name}\n${item.date}`;

        let countryDiv = document.createElement("div");
        countryDiv.innerText = item.country;

        let scoreDiv = document.createElement("div");
        scoreDiv.innerText = item.score;

        let actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");

        let delBtn = document.createElement("button");
        delBtn.classList.add("action-btn");
        delBtn.innerText = "🗑️";
        delBtn.addEventListener('click', function () {
            playerList = playerList.filter(player => player !== item);
            updateData();
        });

        let decBtn = document.createElement("button");
        decBtn.classList.add("action-btn", "decrement");
        decBtn.innerText = "-5";
        decBtn.addEventListener('click', function () {
            item.score = Math.max(0, item.score - 5);
            if (item.score >= 0) {
                updateData();
            } else {
                alert("Score can't be negative");
            }
        });

        let incBtn = document.createElement("button");
        incBtn.classList.add("action-btn", "increment");
        incBtn.innerText = "+5";
        incBtn.addEventListener('click', function () {
            item.score += 5;
            updateData();
        });

        actionsDiv.append(delBtn, decBtn, incBtn);
        card.append(nameDiv, countryDiv, scoreDiv, actionsDiv);
        container.appendChild(card);
    });
}
