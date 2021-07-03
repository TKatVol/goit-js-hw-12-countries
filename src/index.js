import './css/common.css';
import fetchCountries from './js/fetchCountries.js';
import countryCardTpl from './templates/countryCard.hbs';
import countriesListTpl from './templates/countryList.hbs';
import getRefs from './js/getRefs';
import { showAlert, showNotice, showInfo, showSuccess, showError } from './js/pnotify.js';

const debounce = require('lodash.debounce');
const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
    clearCardContainer();

    const searchQuery = event.target.value;

    if (!searchQuery) {
        showInfo();
        return;
    }
    
    fetchCountries(searchQuery)
        .then(results => {
            const countriesList = results.length;

            if (countriesList > 10) {
                showAlert();
                return;
            } else if (countriesList === 1) {
                createCountryCard(results);
                showSuccess();
            } else if (countriesList > 1 && countriesList <= 10) {
                createCountriesList(results);
                showNotice();
            } else {
                clearCardContainer();
                showError();                
            }
        })
}

const createCountriesList = countries => {
    const markup = countriesListTpl(countries);
    refs.cardContainer.innerHTML = markup;
}

const createCountryCard = country => {
    const markup = countryCardTpl(country);
    refs.cardContainer.innerHTML = markup;
}

const clearCardContainer = () => {
    refs.cardContainer.innerHTML = '';
}
