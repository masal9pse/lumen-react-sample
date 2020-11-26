import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";

function App() {
 return (
  <Router>
   <nav>
    <ul>
     <li>
      <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="/products">Products</Link>
     </li>
     <li>
      <Link to="/settings">Settings</Link>
     </li>
    </ul>
   </nav>
   <Switch>
    <Route path="/products">
     <Products />
    </Route>
    <Route path="/settings">
     <Settings />
    </Route>
    <Route path="/">
     <Home />
    </Route>
   </Switch>
  </Router>
 );
}
const Home = () => <h2>Home</h2>;
const Products = () => <h2>Products</h2>;
const Settings = () => <h2>Settings</h2>;
export default App;
