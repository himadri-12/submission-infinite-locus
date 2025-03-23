import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="body-container">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<CategoryPage />} />
            <Route path="/add-to-cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
