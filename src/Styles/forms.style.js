import styled from "styled-components";

export const Form = styled.form`
  display: block;
`;

export const FormInput = styled.input`
  margin: 0.6em 0;
  border: 1px solid #cacaca;
  background-color: whitesmoke;
  height: 2.5em;
  outline: none;
  display: block;
  font-size: 1em;
  padding: 0 0.7em;
  &:hover {
    outline: 1px solid #12cdee;
  }
`;

export const SignUpButton = styled.div``;

export const FormRouter = styled.p`
  color: #12cdee;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const FormLabel = styled.label`
  letter-spacing: 1px;
  text-align: left;
  margin: 20px 5px 0 0;
`;
