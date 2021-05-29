import { ThemeProvider } from "styled-components";

import { CustomThemeContextProvider } from "./contexts/custom-theme-context";
import { ProductsContextProvider } from "./contexts/products-context";
import { useCustomTheme } from "./hooks/use-custom-theme";
import { Routes } from "./routes";
import { lightTheme } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  const [theme, setTheme] = useCustomTheme("@product-flow-theme", lightTheme);

  return (
    <CustomThemeContextProvider theme={theme} setTheme={setTheme}>
      <ThemeProvider theme={theme}>
        <ProductsContextProvider>
          <GlobalsStyles />
          <Routes />
        </ProductsContextProvider>
      </ThemeProvider>
    </CustomThemeContextProvider>
  );
}

export default App;
