import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container py-2">
          <img
            className="header-nav-img"
            src="https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/Group-2.svg"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <a href="home#service">Service</a>
              </li>
              <li className="nav-item">
                <Link to={"/blogs"}>Blogs</Link>
              </li>

              <li className="nav-item">
                <Link to={"/about"}>About</Link>
              </li>

              <li className="nav-item">
                {user ? (
                  <a href="" onClick={() => signOut(auth)}>
                    Sign out
                  </a>
                ) : (
                  <Link to={"/Login"}>Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
