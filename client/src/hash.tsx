export {}

// Compare password for logging in

// bcrypt.compare(
//   data.password,
//   data.hashedPassword,
//   async function (err, isMatch) {
//     // Comparing the original password to
//     // encrypted password
//     if (isMatch) {
//       console.log("Encrypted password is: ", data.password);
//       console.log("Decrypted password is: ", data.hashedPassword);
//       console.log(data);
//     }

//     if (!isMatch) {
//       // If password doesn't match the following
//       // message will be sent
//       console.log(
//         data.hashedPassword + " is not encryption of " + data.password
//       );
//     }
//   }
// );
