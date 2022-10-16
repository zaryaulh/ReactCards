import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

import { Homepage } from "./pages/Homepage";
import { UserDetailsPage } from "./pages/UserDetailsPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};
