import React from "react";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import Admin from "./components/Admin";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import Home from "./components/Home"; // Import the Home component
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path=":username" element={<UserDetail />} />
        {/* protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} /> {/* Add this route for Home */}
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
