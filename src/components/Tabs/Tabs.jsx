import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


function Tabs() {
  return (
    <Nav variant="tabs" defaultActiveKey="/converter">
      <Nav.Item>
        <LinkContainer to="/"><Nav.Link>Currency converter</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
       <LinkContainer to="/currency-list"><Nav.Link>List of Currencies</Nav.Link></LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

export default Tabs;
