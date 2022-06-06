import "./App.css";
import AsideMenu from "./components/AsideMenu";
import Header from "./components/Header";
import { Box } from "@mui/material";
import PageSectionTabs from "./components/PageSectionTabs";

function App() {
  return (
    <>
      <Header />
      <AsideMenu />
      <Box pl="76px">
        <PageSectionTabs />
      </Box>
    </>
  );
}

export default App;
