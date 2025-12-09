import React, { useContext } from "react";
import { CartContext } from "../Context/MyContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.rupees * item.qty,
    0
  );

  return (
    <>
      <div className="container mb-5 mt-3 text-md-start text-center">
        <h2>Cart Section :</h2>
        {cart.length === 0 && <p>No items in cart</p>}
      </div>

      <div className="container text-md-start text-center">
        {cart.map((item) => (
          <div key={item.id} className="col-md-12 mb-3">
            <div className="row border p-2">
              <div className="col-md-3">
                <img src={item.img} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-9">
                <div className="name">
                  <h3>{item.name}</h3>
                  <h6>{item.desc}</h6>
                  <h4>₹{item.rupees}</h4>
                  <p>Quantity: {item.qty}</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="container mt-4 text-md-start text-center">
          <h2>Total Price: ₹{totalPrice}/-</h2>
          <button className="btn btn-outline mt-2 w-25 mb-3">
            <Link to="/register" style={{textDecoration : "none", color : "black"}}>Buy Now</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
