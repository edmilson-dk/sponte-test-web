import { Routes } from "./routes";
import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalsStyles />
      <Routes />
    </CustomThemeProvider>
  );
}

export default App;
