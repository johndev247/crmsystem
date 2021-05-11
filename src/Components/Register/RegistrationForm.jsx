import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormLabel,
  FormRouter,
} from "../../Styles/forms.style";
import { PriButton, Title, VertLine, Warning } from "../../Styles/globalStyles";

const RegistrationForm = ({
  email,
  phone,
  name,
  password,
  password2,
  handleInput,
  signUp,
}) => {
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setWarning(true);
    } else if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      password.trim() !== "" &&
      password2.trim() !== "" &&
      password === password2
    ) {
      setWarning(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Client Registration</Title>
      <VertLine />
      <FormLabel>Full Name</FormLabel>
      <FormInput
        name="name"
        type="text"
        value={name}
        onChange={handleInput}
        required
      />
      <FormLabel>Phone</FormLabel>
      <FormInput
        name="phone"
        type="number"
        value={phone}
        onChange={handleInput}
        required
      />
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
      <FormLabel>Confirm Password</FormLabel>
      <FormInput
        name="password2"
        type="password"
        value={password2}
        onChange={handleInput}
        required
      />
      {warning ? <Warning>Password Mismatch</Warning> : ""}
      <PriButton type="submit">Sign Up</PriButton>
      <FormRouter onClick={signUp}>Already Have An Account?</FormRouter>
    </Form>
  );
};

export default RegistrationForm;
