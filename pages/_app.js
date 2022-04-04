import "../styles/globals.scss";
import { AppProvider } from "../context";
// import Header from "../components/header";
import { StyledEngineProvider } from "@mui/material";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </AppProvider>
  );
}

export default MyApp;
