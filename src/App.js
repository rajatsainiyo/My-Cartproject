
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from "./Cart-project/Cart-product-data/Header";
import Home from "./Cart-project/Card-components/Home";
import About from "./Cart-project/Card-components/About";
import CartItem from "./Cart-project/Card-components/CartItem";
import UserSignup from "./Cart-project/Card-components/UserSign";
import Login from "./Cart-project/Card-components/Login";
import Protectedroute from "./Cart-project/Card-components/Protectedroute";




const App = () => {

  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Protectedroute Component={Home} />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/Cartitem" element={<Protectedroute Component={CartItem} />} />
            <Route path="/about" element={<Protectedroute Component={About} />} />
          </Routes>
        </Router>
      </div>
    </>);
}

export default App;
