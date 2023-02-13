import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const CustomToolbar = () => {
  const { colorMode, toggleColorMode } = useContext(AppContext);

  return (
    <AppBar enableColorOnDark color="primary" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Where is the world
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          onClick={toggleColorMode}
          color="inherit"
          variant="text"
          startIcon={<DarkModeIcon />}
        >
          {colorMode}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
