import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import { Container } from "react-bootstrap";
// import { Container } from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <Tabs />
      <Outlet />
    </Container>
  );
};

export default Layout;
