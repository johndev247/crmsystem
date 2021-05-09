import React from "react";
import ForgetPasswordForm from "../../Components/ForgetPassword/ForgetPasswordForm";
import LoginForm from "../../Components/Login/LoginForm";
import RegistrationForm from "../../Components/Register/RegistrationForm";

const LogRegFormEntry = () => {
  return (
    <div>
      <LoginForm />
      <ForgetPasswordForm />
      <RegistrationForm />
    </div>
  );
};

export default LogRegFormEntry;
