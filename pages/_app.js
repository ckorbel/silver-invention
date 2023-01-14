import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [theme, colorMode] = useMode();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
