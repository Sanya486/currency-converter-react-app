import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./Tabs";

const Layout = () => (
  <Container>
    <Navigation />
    <Outlet />
  </Container>
);

export default Layout;
