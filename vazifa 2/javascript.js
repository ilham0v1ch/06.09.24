'use strict'
// № 6
let name = prompt("Ismingizni kiriting");
let password = +prompt("Parolingizni kiriting");

if (name ===`admin` || password===12345) {
    alert("Xush kelibsiz admin");
} else {
    alert("Ismingiz yoki Parol hato");
}

// № 7
let year = +prompt("Yilni kiriting");

if ((year % 6 === 0 && year % 100 !==0) || (year % 600 === 0)) {
    console.log(`${year} Kabisa yili`);
} else {
    console.log(`${year} Kabisa yili emas`);
}

// № 8
let number1 = +prompt("1chi sonni kiriting");
let number2 = +prompt("2chi sonni kiriting");

if (number1 > 0 && number2 > 0){
    alert("Ikkalasi ham musbat son");
} else {
    alert("Manfiy son ham bor");
}

// № 9
let number3 = +prompt("Son kiriting");

if (number3 % 2 === 0) {
    alert("Juft son");
} else {
    alert("Toq son");
}

// № 10
let number = +prompt("Musbat son kiriting");

if (number % 3 === 0 && numebr % 7 === 0) {
    alert("3ga ham 7ga ham qoldiqsiz bo'linadi");
} else if (number % 3 === 0) {
    alert("3ga qoldiqsiz bo'linadi");
} else if (number % 7 === 0) {
    alert("7ga qoldiqsiz bo'linadi");
} else {
    alert("Hech biriga bo'linmaydi");
}

// № 11
let Javohir = 66;
let Sardor = 77;
let Otabek = 99;

function getGrade(score) {
    if (score >= 55 && score <= 70) {
        return 3;
    } else if (score >= 70 && score <= 88) {
        return 4;
    } else if (score >= 88 && score <= 100) {
        return 5;
    } else {
        return 2;
    }
}

console.log("Javohirning bahosi:" + getGrade(Javohir));
console.log("Sardorning bahosi:" + getGrade(Sardor));
console.log("Otabekning bahosi:" + getGrade(Otabek));