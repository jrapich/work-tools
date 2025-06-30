import {
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import theme from "../theme";
import { CardLink } from "../../global/components/index.js";

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
                flexWrap: "wrap",
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
                {theme.palette.primary.desc}, with pure white background for
                contrast
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
            <CardLink />
          </Container>
        </Container>
      </section>
    </>
  );
}
