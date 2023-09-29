import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { NavLinkSt } from "../styled/Tabs.styled";

const Navigation: React.FC = () => (
  <>
    <DropdownButton id="dropdown-menu" title="Menu" className="d-sm-none">
      <LinkContainer to="/">
        <Dropdown.Item as="button">Currency converter</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/currency-list">
        <Dropdown.Item as="button">Exchange rates</Dropdown.Item>
      </LinkContainer>
    </DropdownButton>
    <Nav
      variant="tabs"
      defaultActiveKey="/converter"
      className="d-none d-sm-flex"
    >
      <Nav.Item>
        <LinkContainer to="/">
          <NavLinkSt>Currency converter</NavLinkSt>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/currency-list">
          <NavLinkSt>Exchange rates</NavLinkSt>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  </>
);

export default Navigation;
