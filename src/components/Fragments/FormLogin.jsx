import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";
import { login } from "../../services/auth.service";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // localStorage.setItem('username', e.target.email.value)
    // localStorage.setItem('password', e.target.password.value)

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="contoh@gmail.com"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <Button classname="bg-yellow-400 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-700">Username atau password salah</p>
      )}
    </form>
  );
}

export default FormLogin;
