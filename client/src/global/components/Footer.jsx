import { Link, Box, Typography } from "@mui/material";

function Copyright() {
  return (
    <>
      <Typography variant="subtitle2" align="center" gutterBottom>
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="subtitle2" align="center">
        <Link color="inherit" href="https://mui.com/">
          powered by React/Material UI
        </Link>{" "}
      </Typography>
    </>
  );
}

export default function Footer() {
  return (
      <Box sx={{ p: 6 }} component="footer">
        <Copyright />
      </Box>
  );
}
