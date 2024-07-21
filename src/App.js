import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Profiles from "./Pages/AllProfiles/Profiles";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      // eslint-disable-next-line react/jsx-no-undef
        <Route path="/" element={<Profiles />} />
        <Route path="/profile/:id" element={<ProfilePage />} /> {/* Added a slash before 'profile' */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
