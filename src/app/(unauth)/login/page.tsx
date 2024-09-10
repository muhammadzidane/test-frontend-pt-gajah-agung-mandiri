import React from "react";

import { type Metadata } from "next";

import { LoginForm } from "./components";

export const metadata: Metadata = {
  description: "...",
  title: "Login",
};

const Login = () => (
  <>
    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
    <LoginForm />
  </>
);

export default Login;
