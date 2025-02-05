import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
          onChange={handleChange}
        />
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
      <Link to="/login">Already have an account ? Login</Link>
    </div>
  );
};

export default Signup;
