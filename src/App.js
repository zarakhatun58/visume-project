import "./App.css";
import AuthProvider from "./context/AuthProvider.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Footer from "./Pages/Footer/Footer";
import Pricing from "./Pages/Pricing/Pricing";
import Navbar from "./Pages/Header/Navbar";
import Contact from "./Pages/Contact/Contact";
import Social from "./Pages/Social/Social";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Pricing></Pricing>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/pricing">
              <Home />
            </Route>
            <Route path="/social">
              <Social />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
