import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/MyContext";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <div className="mynav">
      {/* Top headline */}
      <div className="headline p-2">
        <div className="container d-flex justify-content-center justify-content-md-between ps-4 pe-4">
          <div className="headtext text-white d-none d-sm-block"></div>
          <div className="headtext text-white">
            FREE DELIVERY OVER $100 ON ALL PRODUCTS
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg px-3"
        style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(5px)",
          position: "sticky",
          top: 0,
          zIndex: 9999,
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="https://gbackpack.oceanwp.org/wp-content/uploads/2021/07/blogo.png"
              width="120"
              alt="logo"
            />
          </Link>

          {/* Mobile Icons */}
          <div className="d-flex align-items-center gap-3 d-lg-none">
            <Link to="/cart" className="text-dark fs-5 position-relative">
              <i className="fa-solid fa-cart-shopping fs-4"></i>
              {cart.length > 0 && (
                <span
                  style={{
                    background: "black",
                    color: "white",
                    padding: "2px 6px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    fontSize: "0.8rem",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </Link>

            <i
              className="fa-solid fa-bars fs-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex">
            <ul className="navbar-nav gap-3 align-items-center fs-6">
              {["/", "/shop", "/blog", "/contact"].map((path, i) => {
                const names = ["HOME", "SHOP", "BLOG", "CONTACT"];
                return (
                  <li key={i}>
                    <Link className="nav-link text-dark" to={path}>
                      {names[i]}
                    </Link>
                  </li>
                );
              })}
              <li className="position-relative">
                <Link to="/cart" className="text-dark fs-5">
                  <i className="fa-solid fa-cart-shopping"></i>
                  {cart.length > 0 && (
                    <span
                      style={{
                        background: "black",
                        color: "white",
                        padding: "2px 6px",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "-8px",
                        right: "-10px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${showMenu ? "show-menu" : ""}`}
          style={{
            display: showMenu ? "block" : "none",
            position: "absolute",
            top: "60px",
            left: 0,
            width: "100%",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(5px)",
            zIndex: 9999,
          }}
        >
          <ul className="list-unstyled m-0 ps-3 fs-5 fw-medium">
            {["/", "/shop", "/blog", "/contact"].map((path, i) => {
              const names = ["HOME", "SHOP", "BLOG", "CONTACT"];
              return (
                <li key={i} style={{ padding: "15px 0" }}>
                  <Link
                    className="text-dark text-decoration-none"
                    to={path}
                    onClick={() => setShowMenu(false)}
                  >
                    {names[i]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
