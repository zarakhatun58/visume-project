import "./App.css";
import AuthProvider from "./context/AuthProvider.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Footer from "./Pages/Footer/Footer";
import Pricing from "./Pages/Pricing/Pricing";
import Navbar from "./Pages/Header/Navbar";
import Contact from "./Pages/Contact/Contact";
import Social from "./Pages/Social/Social";

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
            <Route path="/pricing">
              <Home />
            </Route>
            <Route path="/social">
              <Social />
            </Route>

            <Route exact path="/contact">
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
