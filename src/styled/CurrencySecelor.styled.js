import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Wrap = styled.div`
width: 300px;
margin: 20px 0 ;
`

export const LabelSt = styled(Form.Label)`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 400;
  color: ${(props) => props.theme.color};
`;