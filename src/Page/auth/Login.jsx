import React, { useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const login = useLogin();

  const handleChange = (e) => {
    setUser((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await login(user.email, user.password);
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Please enter your email"
          onChange={handleChange}   />
        <br />
        <label htmlFor="passaword">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
          <br />
        <button>Submit</button>
      </form>

      <br />
      <Link to="/signup">Already have an account ? Signup</Link>
    </div>
  )
}

export default Login ;