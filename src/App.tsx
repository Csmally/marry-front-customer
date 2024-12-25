import { memo } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default memo(App);
