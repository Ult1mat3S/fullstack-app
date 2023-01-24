import { ChangeEvent, useState } from "react";

export default function Signup() {
  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    // e.preventDefault();
    console.log("submit data");
  };

  return (
    <div className="login-wrapper">
      <h1>Sign up</h1>
      <form
        action="https://fullstack-backend-nuwh.onrender.com/api"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue="fakeusername123"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue="fakepassword123"
          />
        </label>
        <label>
          <p>Confirm password</p>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            defaultValue="fakepassword123"
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue="example@example.com"
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
