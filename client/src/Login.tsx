import bcrypt from "bcryptjs";
import { ChangeEvent, useState } from "react";

export default function Login() {
  // const saltRounds = 10;
  // const myPlaintextPassword = "s0//P4$$w0rD";
  // const someOtherPlaintextPassword = "not_bacon";
  // const password = "pass123";
  // var hashedPassword;
  // const [data, setData] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   passwordConfirm: "",
  //   hashedPassword: "",
  // });
  // function hash() {
  //   // Encryption of the string password
  //   bcrypt.genSalt(saltRounds, function (err, salt) {
  //     // The bcrypt is used for encrypting password.
  //     bcrypt.hash(data.password, salt, function (err, hash) {
  //       if (err) {
  //         return console.log("Cannot encrypt");
  //       }
  //       data.hashedPassword = hash;
  //       console.log(hash);
  //       submit();
  //     });
  //   });
  // }
  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // }
  // bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  //   // Store hash in your password DB.
  // });
  // function submit() {
  //   console.log(data);
  // }
  // return (
  //   <div className="Register">
  //     <h2>Register</h2>
  //     <form method="post" className="form">
  //       <input
  //         type="text"
  //         name="username"
  //         id="username"
  //         placeholder="Username"
  //         value={data.username}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         id="password"
  //         placeholder="password"
  //         value={data.password}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="password"
  //         name="passwordConfirm"
  //         id="passwordConfirm"
  //         placeholder="Confirm password"
  //         value={data.passwordConfirm}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="email"
  //         name="email"
  //         id="email"
  //         placeholder="Email"
  //         value={data.email}
  //         onChange={handleChange}
  //       />
  //       <button type="button" onClick={submit}>
  //         Create Account
  //       </button>
  //     </form>
  //   </div>
  // );
}
