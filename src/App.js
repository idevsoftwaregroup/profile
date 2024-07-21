import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
