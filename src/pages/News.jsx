import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
} from "@mui/material";

const News = () => {
  // 示例新闻数据
  const newsItems = [
    {
      id: 1,
      title: "Our Team is Now Officially Launched!",
      date: "2025-02-15",
      summary:
        "We are thrilled to announce: The ArticuChic Team is now officially launched!",
      image: "pics/GenShin.jpg",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Project Updates{" "}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Track Our Latest Developments and Stay Informed on Key Updates{" "}
        </Typography>

        <Grid container spacing={4}>
          {newsItems.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: { sm: 200 }, height: { xs: 200, sm: "100%" } }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item.date}
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default News;
