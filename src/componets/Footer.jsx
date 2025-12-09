import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <h5>CONTACT INFO</h5>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="fa-solid fa-map-pin"></i>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="fa-solid fa-phone"></i>
                <span>32235-86233</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-envelope"></i>
                <span>panchalmeet548@gmail.com</span>
              </div>
            </div>

            {/* Information Links */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <h5>INFORMATION</h5>
              <div className="d-flex flex-column">
                <a href="/" className="text-white text-decoration-none mb-1">About Us</a>
                <a href="/contact" className="text-white text-decoration-none mb-1">Store Location</a>
                <a href="/contact" className="text-white text-decoration-none mb-1">Contact Us</a>
                <a href="/shop" className="text-white text-decoration-none mb-1">Shipping & Delivery</a>
                <a href="/blog" className="text-white text-decoration-none">Latest News</a>
              </div>
            </div>

            {/* Our Service Links */}
            <div className="col-12 col-sm-6 col-md-2 mb-4">
              <h5>OUR SERVICE</h5>
              <div className="d-flex flex-column">
                <a href="/" className="text-white text-decoration-none mb-1">About Us</a>
                <a href="/contact" className="text-white text-decoration-none mb-1">Store Location</a>
                <a href="/contact" className="text-white text-decoration-none mb-1">Contact Us</a>
                <a href="/shop" className="text-white text-decoration-none mb-1">Shipping & Delivery</a>
                <a href="/blog" className="text-white text-decoration-none">Latest News</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <h5>NEWSLETTER</h5>
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input
                  type="email"
                  className="form-control mb-2 mb-sm-0"
                  placeholder="Enter email address"
                />
                <button className="btn btn-outline-light">Go</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copy */}
      <div className="bg-dark text-center text-white py-2">
        <h6 className="mb-0">© Copyright - OceanWP</h6>
      </div>
    </>
  );
};

export default Footer;
