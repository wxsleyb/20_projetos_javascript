const megaSenaNumbers = document.querySelectorAll("#megaSenaNumbers .number");
const quinaNumbers = document.querySelectorAll("#quinaNumbers .number");
const lotomaniaNumbers = document.querySelectorAll("#lotomaniaNumbers .number");
const duplaSenaNumbers1 = document.querySelectorAll("#duplaSenaNumbers1 .number");
const duplaSenaNumbers2 = document.querySelectorAll("#duplaSenaNumbers2 .number");
const lotoFacilNumbers = document.querySelectorAll("#lotofacilNumbers .number");
const generateMegaSenaBtn = document.querySelector("#generateMegaSena");
const generateQuinaBtn = document.querySelector("#generateQuina");
const generateLotomaniaBtn = document.querySelector("#generateLotomania");
const generateDuplaSena1Btn = document.querySelector("#generateDuplaSena1");
const generateDuplaSena2Btn = document.querySelector("#generateDuplaSena2");
const generateLotofacilBtn = document.querySelector("#generateLotofacil");





function formatNumberWithZero(number) {
    return number < 10 ? `0${number}` : number.toString();
}

function generateNumbers(min, max, count) {
    const result = [];

    while (result.length < count) {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        const formattedNumber = formatNumberWithZero(number);

        if (!result.includes(formattedNumber)) {
            result.push(formattedNumber);
        }
    }

    result.sort((a, b) => a - b);
    return result;
}


generateMegaSenaBtn.addEventListener("click", function () {
    const max = 60;
    const min = 1;
    const count = 6;
    const numbers = generateNumbers(min, max, count);

    for (let i = 0; i < megaSenaNumbers.length; i++) {
        megaSenaNumbers[i].textContent = numbers[i];
    }
});

generateQuinaBtn.addEventListener("click", function () {
    const max = 80;
    const min = 1;
    const count = 5;
    const numbers = generateNumbers(min, max, count);

    for (let i = 0; i < quinaNumbers.length; i++) {
        quinaNumbers[i].textContent = numbers[i];
    }
});

generateLotomaniaBtn.addEventListener("click", function () {
    const max = 100;
    const min = 1;
    const count = 20;
    const numbers = generateNumbers(min, max, count);

    for (let i = 0; i < lotomaniaNumbers.length; i++) {
        lotomaniaNumbers[i].textContent = numbers[i];
    }
});

generateDuplaSena1Btn.addEventListener("click", function () {
    const max = 50;
    const min = 1;
    const count = 6;
    const numbers = generateNumbers(min, max, count);

    for (let i = 0; i < duplaSenaNumbers1.length; i++) {
        duplaSenaNumbers1[i].textContent = numbers[i];
    }
});

generateDuplaSena2Btn.addEventListener("click", function () {
    const max = 50;
    const min = 1;
    const count = 6;
    const numbers = generateNumbers(min, max, count);

    for (let i = 0; i < duplaSenaNumbers2.length; i++) {
        duplaSenaNumbers2[i].textContent = numbers[i];
    }
});


generateLotofacilBtn.addEventListener("click", function () {
    const min = 1;
    const max = 25;
    const count = 15;
    const numbers = generateNumbers(min, max, count);

    for (let i = 0; i < lotoFacilNumbers.length; i++) {
        lotoFacilNumbers[i].textContent = numbers[i];
    }

});

