interface Country {
  country: string;
  abbreviation: string;
  city: string;
  currency_name: string;
  population: number;
}

const countries: Country[] = [
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
function getCountriesString(countries: Country[]): string {
  return countries.map(country => country.country).join(", ");
}

const countriesString: string = getCountriesString(countries);
console.log(countriesString);

// 2. Подсчитать общее количество людей в данном массиве стран
function getTotalPopulation(countries: Country[]): number {
  return countries.reduce((total, country) => total + country.population, 0);
}

const totalPopulation: number = getTotalPopulation(countries);
console.log(totalPopulation);

// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию
function sortCountriesByName(countries: Country[]): Country[] {
  return countries.sort((a, b) => a.country.localeCompare(b.country));
}

const sortedCountries: Country[] = sortCountriesByName(countries);
console.log(sortedCountries);

// 4. Получить массив валют
function getCurrencies(countries: Country[]): string[] {
  return countries.map(country => country.currency_name);
}

const currencies: string[] = getCurrencies(countries);
console.log(currencies);

// 5. Получить массив городов, отсортированных в алфавитном порядке
function getSortedCities(countries: Country[]): string[] {
  return countries.map(country => country.city).sort();
}

const sortedCities: string[] = getSortedCities(countries);
console.log(sortedCities);

// 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах
function getAveragePopulation(countries: Country[]): number {
  const totalPopulation: number = getTotalPopulation(countries);
  return totalPopulation / countries.length;
}

const averagePopulation: number = getAveragePopulation(countries);
console.log(averagePopulation);