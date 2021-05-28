import { ThemeProvider } from "styled-components";
import { CustomThemeContextProvider } from "./contexts/CustomThemeContext";
import { ProductsContextProvider } from "./contexts/products-context";
import { useCustomTheme } from "./hooks/useCustomTheme";
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
