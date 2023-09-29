import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./Tabs";

const Layout: FC = () => (
  <Container>
    <Navigation />
    <Outlet />
  </Container>
);

export default Layout;
