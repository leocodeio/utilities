import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Before = () => {
  const navigate = useNavigate();

  const clientId =
    "99625581362-lomqd12oca4pb68t5ekdnsj5f1ob6kbh.apps.googleusercontent.com";

  const onLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);
    navigate("/after");
  };

  const onLoginFail = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <div className="h-dvh w-dvw flex flex-col justify-center items-center ">
      <p className="font-bold font-sans ...">before logIn!!!</p>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFail} />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default Before;
