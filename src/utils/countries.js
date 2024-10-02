export const filterCountries = (arr = [], search = "") => {
  let searchTerm = search.toLowerCase();
  const filteredCountries = arr.filter((country) => {
    const { name, capital, languages } = country;
    const isName = name && name.toLowerCase().includes(searchTerm);
    const isCapital = capital && capital.toLowerCase().includes(searchTerm);
    const isLanguages = languages
      .map(({ name }) => name)
      .join()
      .toLowerCase()
      .includes(searchTerm);

    return isName || isCapital || isLanguages;
  });
  const result = search === "" ? arr : filteredCountries;
  return result;
};

export const sortCountries = (arr, type) => {
  const countries = [...arr];
  const sortedCountries = countries.sort((a, b) => {
    if (a[type] > b[type]) return -1;
    if (a[type] < b[type]) return 1;
    return 0;
  });
  return sortedCountries;
};

export const reverseCountries = (arr) => {
  const countries = [...arr];
  return countries.reverse();
};

export const countLanguages = (arr) => {
  const langSet = new Set();
  const allLangArr = [];
  const languageFrequency = [];
  arr.forEach((country) => {
    let { languages } = country;
    for (const language of languages) {
      allLangArr.push(language.name);
      langSet.add(language.name);
    }
  });
  for (const l of langSet) {
    const countries = allLangArr.filter((lang) => lang === l);
    languageFrequency.push({ language: l, count: countries.length });
  }
  return languageFrequency;
};
