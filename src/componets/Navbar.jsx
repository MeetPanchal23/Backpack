import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/MyContext";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <div className="mynav">
        <div className="headline p-2">
          <div className="container d-flex justify-content-md-between justify-content-center ps-4 pe-4">
            <div className="headtext text-white d-none d-sm-block"></div>
            <div className="headtext text-white">
              FREE DELIVERY OVER $100 ON ALL PRODUCTS
            </div>
          </div>
        </div>
        <div style={{ position: "sticky", top: 0, zIndex: 9999 }}>
          <nav
            className="navbar navbar-expand-lg px-3"
            style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="container d-flex justify-content-between align-items-center">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://gbackpack.oceanwp.org/wp-content/uploads/2021/07/blogo.png"
                  width="120"
                />
              </Link>

              {/* Mobile Icons */}
              <div className="d-flex align-items-center gap-4 d-lg-none">
                <div className="position-relative">
                  <Link to="/cart" className="text-dark fs-5">
                    <i className="fa-solid fa-cart-shopping fs-4"></i>
                    <span
                      id="cartCountMobile"
                      className="fs-6 rounded-3"
                      style={{
                        background: "black",
                        color: "white",
                        padding: "2px 6px",
                        position: "absolute",
                        top: "-8px",
                        right: "-10px",
                      }}
                    >
                      {cart.length}
                    </span>
                  </Link>
                </div>

                <i
                  className="fa-solid fa-bars fs-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowMenu(!showMenu)}
                ></i>
              </div>

              {/* Desktop Menu */}
              <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
                <ul className="navbar-nav gap-3 align-items-center fs-6">
                  <li>
                    <Link className="nav-link text-dark" to="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-dark" to="/shop">
                      SHOP
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-dark" to="/blog">
                      BLOG
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-dark" to="/contact">
                      CONTACT
                    </Link>
                  </li>
                  <li className="position-relative">
                    <Link to="/cart" className="text-dark fs-5">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span
                        id="cartCount"
                        className="rounded-3 fs-6"
                        style={{
                          background: "black",
                          color: "white",
                          padding: "2px 6px",
                          position: "absolute",
                          top: "-8px",
                          right: "-10px",
                        }}
                      >
                        {cart.length}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`mobile-menu ${showMenu ? "show-menu" : ""}`}>
              <ul className="list-unstyled m-0 text-start ps-3 fs-5 fw-medium">
                <li>
                  <Link
                    className="text-dark text-decoration-none"
                    to="/"
                    onClick={() => setShowMenu(false)}
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-dark text-decoration-none"
                    to="/shop"
                    onClick={() => setShowMenu(false)}
                  >
                    SHOP
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-dark text-decoration-none"
                    to="/blog"
                    onClick={() => setShowMenu(false)}
                  >
                    BLOG
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-dark text-decoration-none"
                    to="/contact"
                    onClick={() => setShowMenu(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
