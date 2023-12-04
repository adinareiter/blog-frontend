// import "./App.css";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // opens modal
  const handleShowSignup = () => {
    setIsSignupVisible(true);
    setCurrentPost(post);
  };

  // closes modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Blog
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts-index" className="nav-link">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts-new" className="nav-link active" aria-current="page">
                  New Post
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#posts-new"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Acount
                </a>
                <ul className="dropdown-menu">
                  {localStorage.jwt === undefined ? (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" onClick={handleShowSignup}>
                          Signup
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <LogoutLink>Logout</LogoutLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <Modal show={isSignupVisible} onClose={handleClose}>
          <Signup />
        </Modal>
        {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
      </header>
    </div>
  );
}
