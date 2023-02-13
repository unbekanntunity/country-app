import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";

import CountryCard from "../CountryCard";

import styles from "./Home.module.scss";
import { ICountry } from "../../types/ICountry";

interface IHomeProps {
  countryList: ICountry[];
}

const Home = (props: IHomeProps) => {
  const theme = useTheme();

  const { countryList } = props;

  const regions = ["Asia", "Americas", "Polar", "Africa", "Europe", "Oceania"];

  const [region, setRegion] = useState(regions[0]);
  const [search, setSearch] = useState("");

  const filteredCountries = useMemo(() => {
    return countryList.filter(
      (country) => country.name.includes(search) && country.region === region
    );
  }, [countryList, region, search]);

  return (
    <div className={styles.body}>
      <div className={styles.toolbar}>
        <Paper
          style={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <TextField
            className={styles.input}
            color="secondary"
            placeholder="Search for a country"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearch("")} edge="end">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </Paper>
        <Box sx={{ flexGrow: 1 }} />
        <Paper
          style={{
            backgroundColor: theme.palette.primary.main,
          }}
          className={styles.regionSelectContainer}
        >
          <FormControl fullWidth>
            <Select
              color="secondary"
              className={styles.regionSelect}
              labelId="country-select-label"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            >
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      </div>
      {filteredCountries.length !== 0 ? (
        <div className={styles.grid}>
          {filteredCountries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <img
            src="images/NoResults.png"
            alt="No results"
            width={300}
            height={300}
          />
          <Typography variant="h6">
            <b>Hmm the site looks so empty :(</b>
          </Typography>
          <Typography mt={2} variant="body2">
            Why you dont change the region or your search query and continue
            exploring the world?
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Home;
