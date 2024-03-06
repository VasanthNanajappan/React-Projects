import { Link } from ".react-router-dom";
export default function Hehe() {
  return (
    <>
      <div>JJJ</div>
    </>
  );
}

<BrowserRouter>
  <Switch>
    <Route path="/card">
      <Productdetails />
    </Route>
  </Switch>
</BrowserRouter>;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Productdetails from "./productdetails/productdetails";
import { Link } from "react-router-dom";
<Link to="/productdetails">View product Details 👀</Link>;
