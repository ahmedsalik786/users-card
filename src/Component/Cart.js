import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.Carts);
  const dispatch = useDispatch();
  console.log("cart", cart);
  function handleRemoveCart(id) {
    dispatch(remove({ id }));
  }
  return (
    <div>
      <div className="cards-container">
        {cart.map((item) => {
          return (
            <div key={item.id} className="card">
              <h3 style={{ fontSize: "12px" }}> Name:{item.name}</h3>
              <p>Username:{item.username}</p>
              <p style={{ fontSize: "12px" }}> Email:{item.email}</p>
              <p>Phone:{item.phone}</p>
              <p>City:{item.address.city}</p>
              <p>Company:{item.company.name}</p>
              <button onClick={() => handleRemoveCart(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
