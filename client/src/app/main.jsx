import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import theme from "./theme";

import { Home, Error } from "./pages/index.js";
import { Header, Footer } from "../global/components/index.js";

function App(error) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main">
            {error?.error || <Outlet />}
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
