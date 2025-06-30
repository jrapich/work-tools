import { AppBar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

//make link comp
//onclick: navigate to /, or
//button or link inside header, to /, or
//custom link component using one of the above
export default function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{ mb: 8 }} component={"header"}>
        <Container sx={{ pt: 1 }}>
          <Typography variant="h5" color="inherit" align="center" noWrap>
            <Link to={"/"}>
              <HomeOutlinedIcon fontSize="large" />
            </Link>
          </Typography>
        </Container>
      </AppBar>
      <Container sx={{ pb: 8 }}></Container>
    </>
  );
}
