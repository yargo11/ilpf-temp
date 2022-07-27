import "./App.css";
import AsideMenu from "./components/AsideMenu";
import Header from "./components/Header";
import { Box } from "@mui/material";
import PageSectionTabs from "./components/PageSectionTabs";
import { theme } from "./style/theme"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ValoresMedidos from "./components/ValoresMedidos";
import TemperaturaPelame from "./components/TemperaturaPelame";
import ValoresReferencia from "./components/ValoresReferencia";
import FrequenciaCardiaca from "./components/FrequenciaCardiaca";
import FrequenciaRespiratoria from "./components/FrequenciaRespiratoria";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header />
        <AsideMenu />
        <Box pl="76px" pt="65px">
          {/* <PageSectionTabs /> */}
          <ValoresMedidos />
          <ValoresReferencia />
          <TemperaturaPelame />
          <FrequenciaCardiaca />
          <FrequenciaRespiratoria />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
