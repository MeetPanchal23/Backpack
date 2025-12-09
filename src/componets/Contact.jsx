import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="container-fluid blog-label">
        <div className="container d-flex align-items-center justify-content-between p-3">
          <h2>Contact</h2>
          <Link to="" className="nav-link">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="col-md-12">
          <div className="row align-items-center">
            <div className="col-md-6 pt-3 pt-md-0">
              <div className="text-head">
                <h3 className="text-md-start text-center">WE’D LOVE TO HEAR FROM YOU!</h3>
              </div>
              <div className="details p-5">
                <div className="contact d-flex gap-3">
                  <i className="fa-solid fa-phone"></i>
                  <div className="det">
                    <h6>Phone</h6>
                    <p>32235-86233</p>
                  </div>
                </div>
                <div className="email d-flex gap-3">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="det">
                    <h6>Email</h6>
                    <p>panchalmeet548@gmail.com</p>
                  </div>
                </div>
                <div className="map d-flex gap-3">
                  <i className="fa-solid fa-map-pin"></i>
                  <div className="det">
                    <div className="det">
                      <h6>Location</h6>
                      <p>Ahmdebad ,Gujrat ,India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 pb-5 pb-md-0">
              <form
                action="submitData"
                method="post"
                className="p-md-5 d-flex justify-content-around flex-column gap-3"
              >
                <div className="input-fiels d-flex flex-column gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2"
                    name="fname"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2"
                    name="lname"
                  />
                </div>
                <div className="email-input w-80">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="p-2 w-100"
                    name="email"
                  />
                </div>
                <div className="text-filled w-80">
                  <textarea
                    name="text"
                    id=""
                    placeholder="Enter you words about backpack"
                    className="p-2 w-100"
                  ></textarea>
                </div>
                <button className="btn-outline" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
