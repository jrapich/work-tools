import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import theme from "../theme";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <>
      <section>
        <Container maxWidth="md">
          <Container>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              <i>Welcome</i>
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              colors should follow the 60:30:10 rule
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "nowrap",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  px: 2,
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.white.main,
                }}
              >
                {theme.palette.primary.desc}, with pure white background for contrast
              </Typography>
              <Typography
                variant="h6"
                sx={{ px: 2, color: theme.palette.secondary.main }}
              >
                {theme.palette.secondary.desc}
              </Typography>
              <Typography
                variant="h6"
                sx={{ px: 2, color: theme.palette.tertiary.main }}
              >
                {theme.palette.tertiary.desc}
              </Typography>
              <Typography
                variant="h6"
                sx={{ px: 2, color: theme.palette.border.main }}
              >
                {theme.palette.border.desc}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              align="center"
              sx={{ pt: 4, pb: 2 }}
              paragraph
            >
              checkout theme.js for customizing your colors!
            </Typography>
            {/* <Stack
              sx={{ pb: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined">Click here</Button>
              <Button variant="outlined">Or Here</Button>
            </Stack> */}
          </Container>
          <Divider component="div" role="presentation" />
          <Container
            sx={{
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: 0.5,
                      borderRadius: 10,
                      borderColor: theme.palette.border.main,
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                        backgroundSize: "cover",
                      }}
                      //image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Clickable Tool Name
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </section>
    </>
  );
}
