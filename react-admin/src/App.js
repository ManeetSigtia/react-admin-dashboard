import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colourMode] = useMode();
  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider value={theme}>
        <CssBaseline />
        <div classname="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
