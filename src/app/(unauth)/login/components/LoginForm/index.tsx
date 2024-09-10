"use client";

import React from "react";

import { useFormState } from "react-dom";

import { InputGroup, Button, Input } from "@/components";

import { loginAction } from "./actions";

const LoginForm = () => {
  const initialForm = { password: "", user: "" };
  const [error, formAction] = useFormState(loginAction, initialForm);

  return (
    <>
      {error?.serverError && (
        <div className="text-red-400 text-[12px] mb-3">
          {error?.serverError}
        </div>
      )}
      <form action={formAction}>
        <InputGroup errorMessage={error?.user} label="Username">
          <Input placeholder="Enter your username" name="user" />
        </InputGroup>
        <InputGroup errorMessage={error?.password} label="Password">
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
          />
        </InputGroup>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
