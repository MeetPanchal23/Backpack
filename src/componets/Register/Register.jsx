import React, { useContext, useState } from "react";
import QR from "./Qrcode.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/MyContext";

const Register = () => {
  const [control, setControl] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    address: "",
    gender: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://192.168.1.54:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data.message);

      setCart([]);

      setTimeout(() => setLoading(false), 2000);

      Navigate("/cart");
    } catch (err) {
      console.error("Error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="register-box p-4 shadow rounded ">
        <h2 className="text-center mb-5">Register</h2>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <form className="d-flex flex-column gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  className="form-control p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, fname: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  className="form-control p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, lname: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="form-control p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <div className="d-flex p-2">
                  <select name="" id="" className="form-control w-25 d-flex">
                    <option value="IND">+91</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    name="number"
                    className="form-control p-2"
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                  />
                </div>
                <textarea
                  name="address"
                  placeholder="Your Address"
                  className="form-control p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                ></textarea>

                <div className="gender d-flex gap-3 align-items-center">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-check-input"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />{" "}
                    Male
                  </label>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="form-check-input"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />{" "}
                    Female
                  </label>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      className="form-check-input"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />{" "}
                    Other
                  </label>
                </div>
              </form>
            </div>
            <div className="col-md-6 mt-md-0 mt-5  text-md-start text-center">
              <h3>You Want Pay Cash On Delivery ..!</h3>
              <div className="check d-flex align-items-center justify-content-md-start justify-content-center gap-3 text-md-start text-center">
                <label>
                  <input
                    type="radio"
                    name="cod"
                    onChange={() => setControl("yes")}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="cod"
                    onChange={() => {
                      setControl("no");
                      setLoading(true);
                      setTimeout(() => setLoading(false), 2000);
                    }}
                  />{" "}
                  No
                </label>
              </div>
              {control == "yes" && (
                <div className="container mt-4">
                  <p>Your order come in few hours..!</p>
                </div>
              )}
              {control == "no" && (
                <div className="container-fluid me-5 mt-5">
                  <h5>Scan and pay here:</h5>
                  <div className="box">
                    {loading ? (
                      <p>Loading..</p>
                    ) : (
                      <div className="details">
                        <img
                          src={QR}
                          alt=""
                          style={{ height: "150px", width: "150px" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-md-5 mt-3">
              <button
                type="submit"
                className="btn btn-outline mt-2 w-50"
                onClick={formHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
