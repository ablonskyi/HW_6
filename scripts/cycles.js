let string = '';
for (let i = 20; i<=30; i=i+0.5) {
    string += i + ' ';
}
alert (string);

let dollarPrice = 27;
let checkPrice = ``;
for (let i = 10; i<=100; i=i+10) {
    let dollarToHryvnia = `${i} dollars = ${i*dollarPrice} hryvnia`
    checkPrice += dollarToHryvnia + `\n`;
}
alert (checkPrice);

let n = +prompt('choose N');
let numbers = ``
for (let i=1; i<=100&&i**2<=n; i++) {
    numbers += i + ' ';
}
alert(numbers);

let number = +prompt('write number');
let answear = ''
for (let i = 2;0 < i < number; i++) {
    if (number % i == 0) {
        answear = number + 'not prime number'
        break;
    } else {
        answear = number + 'prime number'
        break;
    }
}
alert (answear)


let checkNumber = +prompt('Выберите число');
let i = 0;
let breakPoint = false;

while (3 ** i <= checkNumber) {
  if (checkNumber === 3 ** i) {
    breakPoint = true;
    break;
  }
  i++;
}

if (breakPoint) {
  alert(`${checkNumber} (3^${i})`);
} else {
  alert(`${checkNumber} its impossible`);
}