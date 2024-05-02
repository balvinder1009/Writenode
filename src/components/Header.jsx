import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo192.png";
import "./header.css";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  };

  const handleLogout = () => {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };
  return (
    <header>
      <Link to="/" className="logoColumn">
        <img src={logo} alt="logo image" className="logo" />
        <span>WriteNode</span>
      </Link>

      <div className="navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        {isAuth ? (
          <>
            <NavLink to="/create">Create</NavLink>
            <button onClick={handleLogout} className="loginBtn">
              <i className="bi bi-arrow-bar-right"></i>Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="loginBtn">
            <i className="bi bi-google"></i>Login
          </button>
        )}
      </div>
    </header>
  );
};
