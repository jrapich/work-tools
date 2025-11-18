import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import theme from "../../app/theme";
import features from "../../features/index";

const routes = [];
const titles = [];
for (let i = 0; i < features.length; i++) {
  routes.push(features[i].route);
  titles.push(features[i].title);
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CardLink() {
  const [selectedCard, setSelectedCard] = useState(undefined);

  return (
    <Grid container spacing={4}>
      {routes.map((route, index) => (
        <Grid item key={route} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: 1,
              borderRadius: 2,
            }}
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: theme.palette.primary.main,
                },
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={route}
                >
                  <Typography
                    align="center"
                    variant="h3"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: theme.palette.tertiary.main,
                    }}
                  >
                    {titles[index]}
                  </Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
