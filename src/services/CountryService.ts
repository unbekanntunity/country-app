import { useEffect, useState } from "react";
import { ICountry } from "../types/ICountry";

const useFetch = (url: string) => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(url);
      let response = await res.json();
      setData(response);
    };
    fetchData();
  }, [url]);
  return data;
};

const CountryService = {
  useAll(): ICountry[] {
    const result = useFetch(
      "https://restcountries.com/v2/all?fields=name,population,region,capital,nativeName,subregion,topLevelDomain,flag,currencies,languages,borderCountries"
    );

    if (result)
      return Array.from(result).map((countryJson: any) => ({
        name: countryJson.name,
        population: countryJson.population,
        region: countryJson.region,
        capital: countryJson.capital,
        nativeName: countryJson.nativeName,
        subRegion: countryJson.subregion,
        topLevelDomain: countryJson.topLevelDomain,
        flag: countryJson.flag,
        currencies: countryJson.currencies,
        languages: countryJson.languages,
        borderCountries: countryJson.borderCountries,
      }));
    else {
      return [];
    }
  },
};

export default CountryService;
