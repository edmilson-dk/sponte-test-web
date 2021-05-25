import { ProductsContextProvider } from "./contexts/products-context";
import { Routes } from "./routes";
import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <ProductsContextProvider>
        <GlobalsStyles />
        <Routes />
      </ProductsContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
