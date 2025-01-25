import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Page/Home";
import { AuthContext } from "./hooks/AuthContextProvider";
import Login from "./Page/auth/Login";
import Signup from "./Page/auth/Signup";

function App() {
  const { authUser } = useContext(AuthContext);
  return (
    <Router>
      <Toaster /> {/*// place it here for global access */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
