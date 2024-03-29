import React, { useEffect } from "react";
import "./profile.style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { add, remove } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.Users);
  const cart = useSelector((state) => state.Carts);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      dispatch(fetchUser(res.data));
    } catch (error) {}
  }

  function handleAddCart(user) {
    const isAlreadyAdded = cart.some((cartItem) => cartItem.id === user.id);
    if (!isAlreadyAdded) {
      dispatch(add(user));
    } else {
      dispatch(remove({ id: user.id }));
    }
  }

  function gotoCart() {
    navigate("/cart");
  }

  return (
    <div>
      <button className="cart-button" onClick={gotoCart}>
        Cart<sup>{cart.length}</sup>
      </button>
      <div className="cards-container">
        {users.data.map((item) => {
          return (
            <div key={item.id} className="card">
              <h3 style={{ fontSize: "12px" }}> Name:{item.name}</h3>
              <p>Username:{item.username}</p>
              <p style={{ fontSize: "12px" }}> Email:{item.email}</p>
              <p>Phone:{item.phone}</p>
              <p>City:{item.address.city}</p>
              <p>Company:{item.company.name}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddCart(item)}
              >
                {cart.some((user) => user.id === item.id) ? (
                  <>Remove</>
                ) : (
                  <>Add to cart</>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserProfile;
