import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SignUp } from "../pages/SingUp";
import { SignInSide } from "../pages/SignIn";
import { PageNotFound } from "../pages/PageNotFound";
import {ForgotPassword} from "../pages/ForgotPassword"
import {Admin} from "../pages/Admin"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
}
