import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ArticuChic
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/news"
            sx={{ textTransform: "none" }}
          >
            News
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/team"
            sx={{ textTransform: "none" }}
          >
            Members
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/docs"
            sx={{ textTransform: "none" }}
          >
            Docs
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Box>

      <Box component="footer" sx={{ py: 3, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} DSD Project. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
