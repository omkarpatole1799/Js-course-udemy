'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data, className =''){
    const html = `<article class="country ${className}">
                      <img alt="#" class="country__img" src="${data.flags.svg}" />
                      <div class="country__data">
                        <h3 class="country__name">${data.name.common}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${(+(data.population)/10000000).toFixed(1)}  Million</p>
                        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                        <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
                      </div>
                </article>`
    countriesContainer.insertAdjacentHTML('afterend',html)
}
const renderError = function(err){
    const message = `${err.message} sorry`
    countriesContainer.insertAdjacentText('afterend',message)
}

// const getCountriesData = function(country){
//     // ajax call country 1
//     const request = new XMLHttpRequest()
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`)
//     request.send()
//
//     request.addEventListener('load',function(){
//         const data = JSON.parse(this.responseText)[0]
//
//         // render country
//         renderCountry(data)
//         console.log(data)
//
//         // check if neighbour country avaliable or not if yes then proceed (this is done by optional chaining '?')
//
//         const neighbours = data.borders?.[0]
//         console.log(neighbours)
//
//         const request2 = new XMLHttpRequest()
//         request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbours}`)
//         request2.send()
//         request2.addEventListener('load', function () {
//             const data2  = JSON.parse(request2.responseText)[0]
//
//             // render neighbour
//             renderCountry(data2,'neighbour')
//
//         })
//     })
// }
// getCountriesData('India')
// getCountriesData('portugal')
// getCountriesData('usa')

// using fetch api

const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response)=> response.json())
        .then((data)=>{
            renderCountry(data[0])

            const neighbours = data[0].borders?.[0]
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbours}`)
        })
        .then((response)=> response.json())
        .then((data)=> renderCountry(data[0],'neighbour'))
        .catch(err=>renderError(err))
}

btn.addEventListener('click',function(){
    getCountryData('India')
    // getCountryData('portugal')
    // getCountryData('usa')
})
