import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";
import WatchList from "./pages/WatchList";
import Converter from "./pages/Converter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/convert" element={<Converter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
