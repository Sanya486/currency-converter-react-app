import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowDownSquare } from "react-bootstrap-icons";
export const LabelSt = styled(Form.Label)`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 400;
`;

export const FormWrap = styled.div`
max-width: 500px;
  height: 100%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  border-color:linear-gradient(90deg,#0019ff 0%, #b700ff 80%);
  box-shadow: -1px 11px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ButtonSt = styled(Button)`
 display: block;
 margin-left: auto;
 margin-right: auto;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #0d6efd;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 400;
`;

export const DownArrowSt = styled(ArrowDownSquare)`
display: block;
margin: 20px auto;
`