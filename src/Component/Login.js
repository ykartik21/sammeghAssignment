import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, SetloggedIn] = useState(false);

  const { authenticate } = useContext(AccountContext);

  function handleSubmit(e) {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log("Logged In", data);
        SetloggedIn(true);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  return (
    <div className="signup">
      <div className="heading">
        {loggedIn ? (
          <h3 className="heading">Congratulations You have LoggedIn</h3>
        ) : (
          <h3 className="heading"> Login</h3>
        )}
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="emails">Email</label>
        <input
          type="text"
          id="emails"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="passwords">Password</label>
        <input
          type="password"
          id="passwords"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
