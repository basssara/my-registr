import React, { FC } from "react";
import { Home } from "./pages/Home";
import { SingUp } from "./pages/SingUp";
import { SecondSignIn } from "./pages/SignIn";
import { Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/404";
import "./index.css";

const App: FC = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/signin'>Sign IN</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/signin" element={<SecondSignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
