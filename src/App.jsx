import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Bio from "./pages/Bio";
import Chem from "./pages/Chem";
import Phy from "./pages/Phy";
import Math from "./pages/Math";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/bio" element={<Bio />} />
          <Route path="/user/phy" element={<Phy />} />
          <Route path="/user/chem" element={<Chem />} />
          <Route path="/user/math" element={<Math />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
