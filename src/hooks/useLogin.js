import React from "react";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const login = async (email, password) => {
    try {
      const isUserTrue = validateUser(email, password);
      if (!isUserTrue) return;

      const resp = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        toast.error("There was an error in the responce");
        console.log("there was an error in the responce");
        return;
      }

      const data = await resp.json();
      if (!data["sucessInLogin"]) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      console.log(data);
    } catch (err) {
      console.log("there was an error in login hook => ", err.message);
    }
  };

  return login;
};

const validateUser = (email, password) => {
  if (!email || !password) {
    toast.error("Please provide email or password");
    return false;
  } else if (password.length < 6) {
    toast.error("Password must be atleast 6 characters long");
    return false;
  }
  return true;
};

export default useLogin;
