export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subRegion: string;
  topLevelDomain: string;
  flag: string;
  currencies: ICurrency[];
  languages: ILanguage[];
  borderCountries: string[];
}
