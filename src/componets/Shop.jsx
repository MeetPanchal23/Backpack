import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bagList from "./BagData/Data";
import { CartContext } from "../Context/MyContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {    
    const exist = cart.find((p) => p.id === item.id);

    if (exist) {
      setCart(
        cart.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p))
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  <Link to="/cart">Go to Cart</Link>

  return (
    <>
      <div className="container-fluid blog-label">
        <div className="container d-flex align-items-center justify-content-between p-3">
          <h2>Bag Shoping</h2>
          <a href="" className="nav-link">
            Bag
          </a>
        </div>
      </div>

      <div className="container">
        <div className="row gap-md-0 gap-3">
          {bagList.map((item) => {
            return (
              <div key={item.id} className="col-md-3 text-center mt-3 mb-4">
                <div className="img-content">
                  <img src={item.img} alt="" className="img-fluid" />
                  <div className="cart-icon" onClick={() => addToCart(item)}>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
                </div>

                <div className="details">
                  <h5 className="p-2">{item.name}</h5>
                  <div className="star mb-2">
                    <i className="fa-solid fa-star orange"></i>
                    <i className="fa-solid fa-star orange"></i>
                    <i className="fa-solid fa-star orange"></i>
                    <i className="fa-solid fa-star orange"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h5>{item.rupees}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
