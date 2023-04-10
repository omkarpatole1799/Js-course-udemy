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
const renderError = function(message){
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

// getJSON
const getJSON = function (url,errorMessage="Country Not found"){
    return fetch(url)
        .then((res)=> {
            if(!res.ok){
                throw new Error(`${errorMessage}`)
            }
            return res.json()
        })
}

const getCountryData = function(country){
    getJSON(`https://restcountries.com/v3.1/name/${country}`)
        .then((data)=> {
            renderCountry(data[0])
            const neighbours = data[0].borders[0]
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbours}`)
        }).then((data)=>{
            renderCountry(data[0],'neighbour')
    }).catch((err)=>renderError(`Something went wrong ${err.message}`))
}

// using fetch api

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((response)=> {
//
//             console.log(response)
//             if(!response.ok){
//                 throw new Error(`country not found : ${response.status}`)
//             }
//             return response.json()
//         })
//         .then((data)=>{
//             renderCountry(data[0])
//
//             const neighbours = data[0].borders?.[0]
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbours}`)
//         })
//         .then((response)=> response.json())
//         .then((data)=> renderCountry(data[0],'neighbour'))
//         .catch(err=>renderError(`something went wrong ${err.message}`))
// }

// btn.addEventListener('click',()=>{
//     getCountryData('India')
//     // getCountryData('portugal')
//     // getCountryData('usa')
// })

// micro tasks
/*
- they have more priority than normal tasks
- suppose we have timer function and micro tasks then micro task will execute first then timer task will execute
*/
// these are regular tasks
// setTimeout(()=>console.log('0 sec timer'),0)

// these are micro tasks
// Promise.resolve('resolved promise 1').then(res=>console.log(res))
// Promise.resolve('resolved promise 2').then(res=>{
//     for(let i=0; i<100000; i++){}
//     console.log(res)
// })

// // lottery ticket example
// // create manual promise

// const lotteryTicket = new Promise((resolve,reject)=>{
//     if(Math.random() >= 0.5){
//         resolve("you won lottery")
//     } else {
//         reject('you loose lottery')
//     }
// })
// lotteryTicket.then(res=>console.log(res)).catch(err=>console.log(err))


// promisifying =>convert the callback based funtions to promise based functions
// eg

// wait(2).then(response=>console.log('2 sec wait'))

// const wait = function(seconds){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,seconds*1000)
//     })
// }

// chaining multiple setTimeout functions
// wait(1)
//     .then(()=>{
//     console.log('1 sec')
//     return wait(1)
// }).then(()=>{
//     console.log('2 sec');
//     return wait(1)
// }).then(()=>{
//     console.log('3 sec');
//     return wait(1)
// }).then(()=>{
//     console.log('4 sec');
// })


// async await 
// const myFun = async function(){
//     const res = await fetch('url_here')
//     const data = await res.json()
//     console.log(data);
// }

// lets create whereAmI function using async await
// also handle error using try-catch block

const whereAmI1 = async function(lat,lng){
    try{

        // get lat lng
        const resGeo = await fetch(`https://geokeo.com/geocode/v1/reverse.php?lat=${lat}&lng=${lng}&api=19ccc8b8dcb5cc7bee166db8e6bee778`)
        
        if(!resGeo.ok){
            throw new Error(`Something went wrong resGeo ${resGeo.status}`)
        }
       
        const dataGeo = await resGeo.json()
        if(dataGeo.status !== "ZERO_RESULTS"){
            const {country,district} = dataGeo.results[0].address_components
            console.log(country,district);

            // country
            const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
            if(!response.ok){
                throw new Error('Something went wrong resCountry')
            }
            const data = await response.json()
            console.log(data)
            renderCountry(data[0])

            // neighbours
            const neighbours = data[0].borders[0]
            
            const neighboursResponse = await fetch(`https://restcountries.com/v3.1/alpha/${neighbours}`)
            if(!neighboursResponse.ok){
                throw new Error('Something went wrong resNeighbours')
            }
            const neighboursResponseData = await neighboursResponse.json()
            renderCountry(neighboursResponseData[0])
        } else {
            throw new Error('lat,lng not found')
        }
        
    } catch(err){
        // console.log(err.message)
        renderError(err.message)
    }
}

btn.addEventListener('click',function(){
    whereAmI1(52.508, 13.381)
    // whereAmI1(-3.933, 8.474)
}) 

getJSON

// promise all combinator
const get3Countries = async function(c1,c2,c3){

    try{
        // run multiple operations simultaneously
    const data = await Promise.all([
        getJSON(`https://restcountries.com/v3.1/name/${c1}`),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ])
    const capitals = data.map((data)=>data[0].capital)
    console.log(data);
    console.log(capitals.map((cap)=>cap[0]));
    } catch(err){
        console.log(err);
    }

}
get3Countries('portugal','japan','canada')