import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/Profilescreen";

function App() {
  const user = useSelector(selectUser); //It gives us the user back!
  const dispatch = useDispatch(); //from react-redux

  //Here this useEffect is going to listen whether the user logged in or Not!
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        console.log("nope");
        dispatch(logout());
      }
    });
    return unSubscribe;
  }, [dispatch]);
  //Intially its null,if we logged in,firebase kicks in then it returns you are logged in,then it 'dispatches the Login' and updates the redux!
  return (
    <>
      <div className="app">
        <BrowserRouter>
          {/* if there is no user, we are redirected to login page,if it has user we are into homepage */}
          {!user ? (
            <Loginscreen />
          ) : (
            <Switch>
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
              <Route exact path="/">
                <Homescreen />
              </Route>
            </Switch>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
