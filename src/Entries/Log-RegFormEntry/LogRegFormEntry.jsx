import React, { useState } from "react";
import ForgetPasswordForm from "../../Components/ForgetPassword/ForgetPasswordForm";
import LoginForm from "../../Components/Login/LoginForm";
import RegistrationForm from "../../Components/Register/RegistrationForm";
import { Cards } from "../../Styles/globalStyles";
import { HomePage } from "../../Styles/loingEntry";

const LogRegFormEntry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [comp, setComp] = useState("login");

  const toggleForm = () => {
    switch (comp) {
      case "login":
        setComp("restPassword");
        break;
      case "restPassword":
        setComp("login");
        break;
      default:
        break;
    }
  };

  const signUp = () => {
    switch (comp) {
      case "login":
        setComp("sign-up");
        break;
      case "sign-up":
        setComp("login");
        break;
      default:
        break;
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && password === password2) {
    }
  };

  return (
    <HomePage>
      <Cards>
        {comp === "login" ? (
          <LoginForm
            handleSubmit={handleSubmit}
            toggleForm={toggleForm}
            email={email}
            password={password}
            handleInput={handleInput}
            signUp={signUp}
          />
        ) : comp === "restPassword" ? (
          <ForgetPasswordForm
            handleSubmit={handleSubmit}
            toggleForm={toggleForm}
            email={email}
            handleInput={handleInput}
          />
        ) : comp === "sign-up" ? (
          <RegistrationForm
            email={email}
            password={password}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            signUp={signUp}
            name={name}
            phone={phone}
            password2={password2}
          />
        ) : (
          <LoginForm />
        )}
      </Cards>
    </HomePage>
  );
};

export default LogRegFormEntry;
