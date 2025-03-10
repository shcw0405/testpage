import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import GanttChart from "../components/GanttChart";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Welcome to our Website!
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          color="text.secondary"
        >
          Our mission is to make your articulation chic again.
        </Typography>

        {/* 甘特图部分 - 放在显眼位置 */}
        <Paper elevation={3} sx={{ p: 3, mt: 4, mb: 6 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Gantt chart of our project
          </Typography>
          <Box sx={{ height: "400px", mt: 2 }}>
            <GanttChart />
          </Box>
        </Paper>

        {/* 项目概述部分 */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Project Overview
          </Typography>
          <Typography variant="body1" paragraph>
            This platform serves as a centralized hub for tracking project
            progress, team member profiles, latest updates, and deliverables.
            Through this platform, you can gain real-time insights into every
            aspect of the project, facilitating seamless communication and
            collaboration across teams.
          </Typography>
          <Typography variant="body1" paragraph>
            To learn more about our projects, please use the navigation bar
            above to explore different pages.{" "}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
