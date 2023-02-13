import { Box, Card, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ICountry } from "../types/ICountry";

import styles from "./CountryCard.module.scss";

interface ICountryCardProps {
  country: ICountry;
}

const CountryCard = (props: ICountryCardProps) => {
  const { country } = props;

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/country/${country.name}`)}
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
      className={styles.card}
    >
      <img
        alt={`${country.flag} flag`}
        className={styles.flag}
        src={country.flag}
      />
      <Box margin={4}>
        <p className={styles.name}>{country.name}</p>
        <Typography variant="body2">
          <b>Population: </b>
          {country.population}
        </Typography>
        <Typography mt={1} variant="body2">
          <b>Region: </b>
          {country.region}
        </Typography>
        <Typography mt={1} variant="body2">
          <b>Capital: </b>
          {country.capital}
        </Typography>
      </Box>
    </Card>
  );
};

export default CountryCard;
