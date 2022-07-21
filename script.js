var stars = document.getElementsByClassName("stars");
let marginT = Math.floor((Math.random() * 100) + 1).toString();
let marginR = Math.floor((Math.random() * 100) + 1).toString();
let marginB = Math.floor((Math.random() * 100) + 1).toString();
let marginL = Math.floor((Math.random() * 100) + 1).toString();

let marginTs = [Math.floor((Math.random() * 0) + 1).toString(), Math.floor((Math.random() * 10) + 1).toString(), Math.floor((Math.random() * 20) + 1).toString(), 
    Math.floor((Math.random() * 30) + 1).toString(), Math.floor((Math.random() * 40) + 1).toString(), Math.floor((Math.random() * 50) + 1).toString(), 
    Math.floor((Math.random() * 60) + 1).toString(), Math.floor((Math.random() * 70) + 1).toString(), Math.floor((Math.random() * 80) + 1).toString(), 
    Math.floor((Math.random() * 90) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 15) + 1).toString(), 
    Math.floor((Math.random() * 25) + 1).toString(), Math.floor((Math.random() * 35) + 1).toString(), Math.floor((Math.random() * 45) + 1).toString(), 
    Math.floor((Math.random() * 55) + 1).toString(), Math.floor((Math.random() * 65) + 1).toString(), Math.floor((Math.random() * 75) + 1).toString(), 
    Math.floor((Math.random() * 85) + 1).toString(), Math.floor((Math.random() * 95) + 1).toString(), Math.floor((Math.random() * 100) + 5).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString()];
let marginRs = [Math.floor((Math.random() * 0) + 1).toString(), Math.floor((Math.random() * 10) + 1).toString(), Math.floor((Math.random() * 20) + 1).toString(), 
    Math.floor((Math.random() * 30) + 1).toString(), Math.floor((Math.random() * 40) + 1).toString(), Math.floor((Math.random() * 50) + 1).toString(), 
    Math.floor((Math.random() * 60) + 1).toString(), Math.floor((Math.random() * 70) + 1).toString(), Math.floor((Math.random() * 80) + 1).toString(), 
    Math.floor((Math.random() * 90) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 15) + 1).toString(), 
    Math.floor((Math.random() * 25) + 1).toString(), Math.floor((Math.random() * 35) + 1).toString(), Math.floor((Math.random() * 45) + 1).toString(), 
    Math.floor((Math.random() * 55) + 1).toString(), Math.floor((Math.random() * 65) + 1).toString(), Math.floor((Math.random() * 75) + 1).toString(), 
    Math.floor((Math.random() * 85) + 1).toString(), Math.floor((Math.random() * 95) + 1).toString(), Math.floor((Math.random() * 100) + 5).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString()];
let marginBs = [Math.floor((Math.random() * 0) + 1).toString(), Math.floor((Math.random() * 10) + 1).toString(), Math.floor((Math.random() * 20) + 1).toString(), 
    Math.floor((Math.random() * 30) + 1).toString(), Math.floor((Math.random() * 40) + 1).toString(), Math.floor((Math.random() * 50) + 1).toString(), 
    Math.floor((Math.random() * 60) + 1).toString(), Math.floor((Math.random() * 70) + 1).toString(), Math.floor((Math.random() * 80) + 1).toString(), 
    Math.floor((Math.random() * 90) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 15) + 1).toString(), 
    Math.floor((Math.random() * 25) + 1).toString(), Math.floor((Math.random() * 35) + 1).toString(), Math.floor((Math.random() * 45) + 1).toString(), 
    Math.floor((Math.random() * 55) + 1).toString(), Math.floor((Math.random() * 65) + 1).toString(), Math.floor((Math.random() * 75) + 1).toString(), 
    Math.floor((Math.random() * 85) + 1).toString(), Math.floor((Math.random() * 95) + 1).toString(), Math.floor((Math.random() * 100) + 5).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString()];
let marginLs = [Math.floor((Math.random() * 0) + 1).toString(), Math.floor((Math.random() * 10) + 1).toString(), Math.floor((Math.random() * 20) + 1).toString(), 
    Math.floor((Math.random() * 30) + 1).toString(), Math.floor((Math.random() * 40) + 1).toString(), Math.floor((Math.random() * 50) + 1).toString(), 
    Math.floor((Math.random() * 60) + 1).toString(), Math.floor((Math.random() * 70) + 1).toString(), Math.floor((Math.random() * 80) + 1).toString(), 
    Math.floor((Math.random() * 90) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 15) + 1).toString(), 
    Math.floor((Math.random() * 25) + 1).toString(), Math.floor((Math.random() * 35) + 1).toString(), Math.floor((Math.random() * 45) + 1).toString(), 
    Math.floor((Math.random() * 55) + 1).toString(), Math.floor((Math.random() * 65) + 1).toString(), Math.floor((Math.random() * 75) + 1).toString(), 
    Math.floor((Math.random() * 85) + 1).toString(), Math.floor((Math.random() * 95) + 1).toString(), Math.floor((Math.random() * 100) + 5).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), 
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString(),
    Math.floor((Math.random() * 100) + 1).toString(), Math.floor((Math.random() * 100) + 1).toString()];

for (let i = 0; i < stars.length; i++) {
    stars[i].style.margin = marginTs[i] + 'vh ' + marginRs[i] + 'vw ' + marginBs[i] + 'vh ' + marginLs[i] + 'vw ';
    console.log(marginTs[i] + 'vh ' + marginRs[i] + 'vw ' + marginBs[i] + 'vh ' + marginLs[i] + 'vw ')
}

console.log(marginTs.length);
console.log(stars[1].style);
