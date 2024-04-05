import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  ContactEu,
  ContactIn,
  ContactUs,
  Admin,
  PageNotFound,
} from "../components";

export const AllRoutes = ()=> {
  const user = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
        </Route>
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
