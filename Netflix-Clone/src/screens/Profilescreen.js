import React from "react";
import "./Profilescreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase";

function Profilscreen() {
  const user = useSelector(selectUser); //we saved it already in redux and now we are fetching Data!
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="profileScreen__subplans">
                <h4>
                  Netflix Standard
                  <br />
                  <span>1080p</span>
                </h4>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__subplans">
                <h4>
                  Netflix Standard
                  <br />
                  <span>720p</span>
                </h4>
                <button>Subscribe</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign out
              </button>
              {/* the signout function comes from useEffect in App.js */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilscreen;
