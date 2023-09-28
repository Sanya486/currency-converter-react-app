import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

export const NavLinkSt = styled(Nav.Link)`
  color: black;
  &.active {
    color: ${(props) => props.theme.color};
  }
`;
