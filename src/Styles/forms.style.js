import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin: 0.6em 0;
  border: 1px solid #cacaca;
  background-color: #e4ebe2;
  height: 3em;
  border-radius: 0.4em;
  outline: none;
  font-size: 1em;
  padding: 0 0.7em;
`;

export const SignUpButton = styled.div`
  align-self: flex-end;
`;

export const FormRouter = styled.p`
  color: #12cdee;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const FormLabel = styled.label`
  letter-spacing: 1px;
`;
