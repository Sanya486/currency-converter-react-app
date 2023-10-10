import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./Navigation";

const Layout: FC = () => (
  <Container data-testid="layout-wrapper">
    <Navigation />
    <Outlet />
  </Container>
);

export default Layout;
