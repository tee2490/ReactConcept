import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Admin from "./components/Admin"

export default function App() {
  const user = true;

  return (
    <div>
      <Header />
      <div className="text-center mt-4" >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/1001" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/admin" element={ user ? <Admin /> : <Navigate to="/" />} />
      </Routes>
      </div>
    </div>
  );
}
