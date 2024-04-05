import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Admin from "./components/Admin";
import PageNotFound from "./components/PageNotFound";
import ContactIn from "./components/ContactIn";
import ContactEu from "./components/ContactEu";
import ContactUs from "./components/ContactUs";

export default function App() {
  const user = true;

  return (
    <div>
      <Header />
      <div className="text-center mt-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
          </Route>
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}
