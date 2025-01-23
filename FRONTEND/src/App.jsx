import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/NoPage";
import Detail from "./Pages/Detail";
import Admin from "./Layout/Admin";
import AdminProduct from "./Admin/AdminProduct";
import { HelmetProvider } from "react-helmet-async";
import AddProduct from "./Admin/AddProduct";

export default function App() {
  return (
    <HelmetProvider>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
       <Route>
          <Route path="/admin" element={<Admin/>}/>
          <Route index element={<AdminProduct/>}/>
          <Route path="add" element={<AddProduct/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}