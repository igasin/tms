var countries = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959
    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
];
// 1. Создать строку из названий стран через запятую
function getCountriesString(countries) {
    return countries.map(function (country) { return country.country; }).join(", ");
}
var countriesString = getCountriesString(countries);
console.log(countriesString);
// 2. Подсчитать общее количество людей в данном массиве стран
function getTotalPopulation(countries) {
    return countries.reduce(function (total, country) { return total + country.population; }, 0);
}
var totalPopulation = getTotalPopulation(countries);
console.log(totalPopulation);
// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию
function sortCountriesByName(countries) {
    return countries.sort(function (a, b) { return a.country.localeCompare(b.country); });
}
var sortedCountries = sortCountriesByName(countries);
console.log(sortedCountries);
// 4. Получить массив валют
function getCurrencies(countries) {
    return countries.map(function (country) { return country.currency_name; });
}
var currencies = getCurrencies(countries);
console.log(currencies);
// 5. Получить массив городов, отсортированных в алфавитном порядке
function getSortedCities(countries) {
    return countries.map(function (country) { return country.city; }).sort();
}
var sortedCities = getSortedCities(countries);
console.log(sortedCities);
// 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах
function getAveragePopulation(countries) {
    var totalPopulation = getTotalPopulation(countries);
    return totalPopulation / countries.length;
}
var averagePopulation = getAveragePopulation(countries);
console.log(averagePopulation);
