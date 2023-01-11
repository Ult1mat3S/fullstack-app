import { useState } from "react";

function App() {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submit() {
    console.log(data);
  }

  return (
    <div className="App">
      <form method="post" className="form">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
        />
        <button type="button" onClick={submit}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default App;
