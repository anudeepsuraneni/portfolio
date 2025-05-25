import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <NavBar />
    <Container sx={{ flex: 1, py: 3 }}>
      <Outlet />
    </Container>
    <Footer />
  </Box>
);

export default Layout;
