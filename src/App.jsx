import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import AppLayout from "./AppLayout";
import Market from "./pages/Market";
import SignUpForm from "./features/authentication/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Route>
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
