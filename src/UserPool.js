import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-northeast-1_WEajoucRG",
  ClientId: "2eq8qcf0u8c4cc0v4h9ps12vv9",
};

export default new CognitoUserPool(poolData);
