import "../styles/globals.scss";
import { AppProvider } from "../context";
// import Header from "../components/header";
import { StyledEngineProvider , CssBaseline} from "@mui/material";
import Header from "../components/Header"
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </StyledEngineProvider>
    </AppProvider>
  );
}

export default MyApp;
