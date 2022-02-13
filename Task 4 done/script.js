/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const container = document.querySelector('#output');


fetch('./cars.json')
.then((results) => results.json())
.then ((data) => {
    let output = '';
    data.forEach((data) => {
        output += `<div class = 'brand'><b>${data.brand}</b><div class = 'models'>${data.models}</div></div>`;      
    })
    container.innerHTML = output;
})



