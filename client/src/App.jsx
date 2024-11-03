import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import theme from "./theme";

import { Header, Footer } from "./components";

function App(error) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main">
        <Box
          sx={{
            px: 3,
            borderLeft: 6,
            borderRight: 6,
            borderBottom: 6,
            paddingBottom: 2,
            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              px: 1,
              paddingBottom: 1,
              borderLeft: 2,
              borderRight: 2,
              borderBottom: 2,
              borderRadius: 10,
            }}
          >
            {error?.error || <Outlet />}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
