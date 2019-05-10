/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import HvLogin from "@hv/uikit-react-core/dist/Login";

const callSimulation = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

const labels = 
{
  titleText: "Title text",
  recoveryTitle: "recovery title",
  messageToRecover: "message to recover",
  messageAfterRecover: "message after recover",
  recoveryInputLabel: "recovery label",
  recoveryPlaceholder: "recovery placeholder",
  recoveryErrorMessage: "error message",
  userNameInputLabel: "username label",
  userNamePlaceHolder: "uplaceholder",
  passwordInputLabel: "password input label",
  passwordPlaceHolder: "password placeholder",
  rememberMeLabel: "remember me label",
  loginButtonMessage: "Log message",
  loginButtonLabel: "Log button",
  forgotYourCredentialMessage: "forgot Your Credential Message",
  emailLabel: "email label",
  emailPlaceholder: "email placeholder",
  cancelButton: "Cancel label",
  recoverButton: "Recover label",
  recoveringMessage: "Recovering label",
}

export default (
  <div
    style={{
      height: "100vh",
      display: "flex"
    }}
  >
    <HvLogin
      login={callSimulation}
      recovery={callSimulation}
      allowRecover={true}
      allowRememberMe={true}
      labels={labels}
    />
  </div>
);