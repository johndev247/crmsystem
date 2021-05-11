import React from "react";
import {
  Form,
  FormInput,
  FormLabel,
  FormRouter,
} from "../../Styles/forms.style";
import { PriButton, Title, VertLine } from "../../Styles/globalStyles";

const ForgetPasswordForm = ({
  handleSubmit,
  toggleForm,
  email,
  handleInput,
}) => {
  return (
    <Form onClick={handleSubmit}>
      <Title>Password Reset</Title>
      <VertLine />
      <FormLabel>Email Address</FormLabel>
      <FormInput
        type="email"
        name="email"
        value={email}
        onChange={handleInput}
      />
      <PriButton type="submit">Reset</PriButton>
      <FormRouter onClick={toggleForm}>Login</FormRouter>
    </Form>
  );
};

export default ForgetPasswordForm;
