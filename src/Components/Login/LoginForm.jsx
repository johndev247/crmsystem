import React from "react";
import {
  Form,
  FormInput,
  FormLabel,
  FormRouter,
  SignUpButton,
} from "../../Styles/forms.style";
import { PriButton, Title, VertLine } from "../../Styles/globalStyles";

const LoginForm = ({
  handleSubmit,
  toggleForm,
  email,
  password,
  handleInput,
  signUp,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <SignUpButton>
        <FormRouter style={{ textAlign: "right" }} onClick={signUp}>
          Sign Up
        </FormRouter>
      </SignUpButton>
      <Title>Client Login</Title>
      <VertLine />
      <FormLabel>Email Address</FormLabel>
      <FormInput
        name="email"
        type="email"
        value={email}
        onChange={handleInput}
        required
      />

      <FormLabel>Password</FormLabel>
      <FormInput
        name="password"
        type="password"
        value={password}
        onChange={handleInput}
        required
      />
      <PriButton type="submit">Login</PriButton>
      <FormRouter onClick={toggleForm}>Forget Password?</FormRouter>
    </Form>
  );
};

export default LoginForm;
