import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(true);
  const { getSession, logOut } = useContext(AccountContext);
  useEffect(() => {
    getSession().then((session) => {
      console.log("Session", session);
      setStatus(false);
    });
  });
  return (
    <div className="status">
      {status ? (
        <h1>Log In</h1>
      ) : (
        <button className="btn" onClick={logOut}>
          LogOut
        </button>
      )}
    </div>
  );
};

export default Status;
