import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ICountry } from "../../types/ICountry";

import styles from "./CountryDetail.module.scss";

interface ICountryDetailProps {
  countryList: ICountry[];
}

const CountryDetail = (props: ICountryDetailProps) => {
  const { countryList } = props;
  const { name } = useParams();
  const navigate = useNavigate();
  const country = useMemo(() => {
    return countryList.find((country) => country.name === name);
  }, [name, countryList]);

  return (
    <div>
      <Button
        className={styles.back}
        onClick={() => navigate("/home")}
        color="inherit"
        variant="outlined"
        startIcon={<KeyboardBackspaceIcon />}
      >
        Back
      </Button>

      {country ? (
        <div className={styles.container}>
          <img
            alt={`${country.flag} flag`}
            className={styles.flag}
            src={country.flag}
            width={350}
            height={200}
          />
          <div>
            <Typography variant="h5">
              <b>{country.name}</b>
            </Typography>
            <Box mt={4} className={styles.countryInfos}>
              <Typography variant="body2">
                <b>Native Name: </b>
                {country.nativeName}
              </Typography>
              <Typography variant="body2">
                <b>Top Level Domain: </b>
                {country.topLevelDomain}
              </Typography>
              <Typography variant="body2">
                <b>Population: </b>
                {country.population}
              </Typography>
              <Typography variant="body2">
                <b>Currencies: </b>
                {country.currencies.map((currency) => currency.name)}
              </Typography>
              <Typography variant="body2">
                <b>Region: </b>
                {country.region}
              </Typography>
              <Typography variant="body2">
                <b>Languages: </b>
                {country.languages.map((language) => language.name)}{" "}
              </Typography>
              <Typography variant="body2">
                <b>Sub Region: </b>
                {country.subRegion}
              </Typography>
              <div></div>
              <Typography variant="body2">
                <b>Capital: </b>
                {country.capital}
              </Typography>
            </Box>
          </div>
        </div>
      ) : (
        <Typography>
          Dont listen to your geography classes, hmm? Don't worry happens to
          everayone. Just go back and select a valid country :)
        </Typography>
      )}
    </div>
  );
};

export default CountryDetail;
