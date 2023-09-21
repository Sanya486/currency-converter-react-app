import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { NavLinkSt } from "../styled/Tabs.styled";

const Tabs = () => (
  <Nav variant="tabs" defaultActiveKey="/converter">
    <Nav.Item>
      <LinkContainer to="/">
        <NavLinkSt>Currency converter</NavLinkSt>
      </LinkContainer>
    </Nav.Item>
    <Nav.Item>
      <LinkContainer to="/currency-list">
        <NavLinkSt>List of Currencies</NavLinkSt>
      </LinkContainer>
    </Nav.Item>
  </Nav>
);

export default Tabs;
