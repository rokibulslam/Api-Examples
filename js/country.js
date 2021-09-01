const loadCountries = ()=> {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = countries => {
    // for (const country of countries) {
        
    // }
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        // run loop for catch every counttry from countries array 
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        // ১টা country এর মাঝে আছে country object.country object theke property access korte object.property use করলে property vlaue পাওয়া যায় 
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick = "loadCountryByName('${country.name}')">Details</button>
        `;
        
        countriesDiv.appendChild(div);

    });
    
}
const loadCountryByName = name => {
        const url = `https://restcountries.eu/rest/v2/name/${name};`
        console.log(url)
        fetch(url)
            .then(res => res.json()) 
            .then(data => desplayCountryDetails(data[0]))
    
}
const desplayCountryDetails = country => {
        const countryDiv = document.getElementById('country-detail');
        countryDiv.innerHTML = `
            <h5>${country.name}</h5>
            <p>Population: ${country.population}</p>
            <img width = "200px" src ="${country.flag}">
        `
}