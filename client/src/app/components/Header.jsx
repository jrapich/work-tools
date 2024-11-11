import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
//make link comp
//onclick: navigate to /, or
//button or link inside header, to /, or
//custom link component using one of the above
export default function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Container>
            <Typography variant="h5" color="inherit" align="center" noWrap>
              clickable home link
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
