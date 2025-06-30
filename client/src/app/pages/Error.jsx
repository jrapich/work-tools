import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <Typography
        component={"h1"}
        variant="h2"
        align={"center"}
        sx={{ m: 4, mb: 20 }}
      >
        something went wrong
      </Typography>
      <Typography variant="h2" align="center">
        {error.status}
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 20 }}>
        {error?.statusText}
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 80 }}>
        {error.data}
      </Typography>
    </Container>
  );
}
