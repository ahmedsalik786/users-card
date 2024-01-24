import "./App.css";
import UserProfile from "./Component/UserProfile";
import { Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      {/* <UserProfile /> */}

      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
