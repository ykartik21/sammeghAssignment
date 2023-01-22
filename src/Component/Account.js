import React, { createContext, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

//Creating Context
const AccountContext = createContext();

const getSession = async () => {
  return await new Promise((resolve, reject) => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.getSession((error, session) => {
        if (error) {
          reject();
        } else {
          resolve(session);
        }
      });
    } else {
    }
  });
};
const logOut = async () => {
  const user = Pool.getCurrentUser();
  if (user) {
    user.signOut();
  }
};
const Account = (props) => {
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });
      const authenDetails = new AuthenticationDetails({
        Username,
        Password,
      });
      user.authenticateUser(authenDetails, {
        onSuccess: (data) => {
          console.log("onSuccess : ", data);
          resolve(data);
        },
        onFailure: (error) => {
          console.error("onFailure : ", error);
          reject(error);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired : ", data);
          resolve(data);
        },
      });
    });
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logOut }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
