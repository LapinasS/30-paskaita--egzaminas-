/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let form = document.querySelector('form');
let output = document.querySelector('#output');

form.addEventListener('submit', (calc) => {
    calc.preventDefault();
    let pounds = form[0].value * 2.2046;
    let grams = form[0].value / 0.001;
    let ounce = form[0].value * 35.27; 
    output.innerHTML = `<b>${form[0].value} kg yra:</b> <br> ${pounds} lb.,<br> ${grams} g.,<br> ${ounce} oz.`
    document. getElementById('search'). value = '';
});

