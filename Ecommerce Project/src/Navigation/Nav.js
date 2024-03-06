import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import "./Nav.css";

export default function Nav({ query, handleInputChange }) {
  return (
    <nav>
      <div className="div-conatainer">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
          onChange={handleInputChange}
          value={query}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart
            className="nav-icons
          "
          />
        </a>

        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
