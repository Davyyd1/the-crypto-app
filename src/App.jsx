import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import AppLayout from "./AppLayout";
import Market from "./pages/Market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
