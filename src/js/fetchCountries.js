const BASE_URL = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountries(country) { 
  return fetch(`${BASE_URL}/${country}`)
    .then(response => {
      return response.json()
    })  
}
