import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import CakePage from "./pages/CakePage";
import HistoryPage from "./pages/HistoryPage";
import { Routes, Route } from "react-router-dom";
import ManageCakePage from "./pages/ManageCakePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cake" element={<CakePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/manage" element={<ManageCakePage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
