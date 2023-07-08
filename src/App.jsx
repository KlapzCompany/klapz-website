import { CssBaseline, ThemeProvider } from "@mui/material";
import Navigation from "./routes";
import { KlapzTheme } from "./theme/KlapzTheme";

function App() {
  return (
    <ThemeProvider theme={KlapzTheme}>
      <CssBaseline />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
