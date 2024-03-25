"use client";
import { useState } from "react";
// import styles from "../../styles/Form.module.css";

import Cookies from "js-cookie";
import { useLoginMutation } from "@/app/features/auth/authApiSlice";
// import { useNavigate } from "react-router";

const LoginForm = () => {
  //   const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({ email: "", password: "" });
  const [login, { isError, isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        username: userInputs.username,
        password: userInputs.password,
      });
      const token = data.token;
      if (token) {
        Cookies.set("token", token);
        setUserInputs({ username: "", password: "" });
        // navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="username"
            name="username"
            required
            value={userInputs.username}
            onChange={(e) =>
              setUserInputs((prev) => {
                return { ...prev, username: e.target.value };
              })
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={4}
            value={userInputs.password}
            onChange={(e) =>
              setUserInputs((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
        </fieldset>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Submitting..." : "Signin"}
        </button>
      </form>
      {isError && error && <p className="">{error.data.message}</p>}
    </>
  );
};

export default LoginForm;
