import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import theme from "./theme";

import { Home, Error } from "./pages/index.js";
import { Header, Footer } from "./components/index.js";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App error={<Error />} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login signup={false} />,
      // },
      // {
      //   path: "/signup",
      //   element: <Login signup={true} />,
      // },
      // {
      //   path: "/logout",
      //   element: <Logout />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
