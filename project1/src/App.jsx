import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "sonner"
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collections/:collection" element={<CollectionPage />} />
        </Route>
        <Route ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App
