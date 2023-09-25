import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Tabs";
import { Container } from "react-bootstrap";
// import { Container } from "./Layout.styled";

const Layout = () => (
  <Container>
    <Navigation />
    <Outlet />
  </Container>
);

export default Layout;
