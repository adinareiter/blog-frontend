import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    console.log("handle submit", params);
    // props.onCreateUser(params);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.resonse.data.errors);
      });
  };
  return (
    <div id="signup">
      <h3>Sign up!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div>
          {" "}
          <input name="password_confirmation" type="password" placeholder="Password Confirmation" />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
