

import { Routes, Route } from "react-router-dom";
// import Index from "../user/home/Index";
import NavBar from "../admin/navbar/NavBar";
import ListCatalog from "../admin/catalog/ListCatalog"
import ListProduct from "../admin/product/ListProduct"
import ListTopping from "../admin/topping/ListTopping"
import ListUser from "../admin/user/ListUser"
import NewUse from "../admin/user/NewUser"
import NewCatalog from "../admin/catalog/NewCatalog"
import UpdateCatalog from "../admin/catalog/UpdateCatalog"
import CreateProduct from "../admin/product/CreateProduct"
import Topping from "../admin/topping/Topping"
import NewTopping from "../admin/topping/NewTopping"
import UpdateProduct from "../admin/product/UpdateProduct"
import UpdateTopping from "../admin/topping/UpdateTopping"
import Detail from "../admin/product/Detail"
import Index from "../admin/home/Index";
import ToppingDetail from "./topping/ToppingDetail";

// import './css/app.scoped.css';

function AppAdmin() {
  return (
  <>
  <Routes>

      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element  ={<Index />} />
        <Route path="/Index" element={<Index></Index>}></Route>
        <Route path="/Category" element={<ListCatalog></ListCatalog>}></Route>
        <Route path="/Product" element={<ListProduct></ListProduct>}></Route>
        <Route path="/Topping" element={<ListTopping></ListTopping>}></Route>
        <Route path="/User" element={<ListUser></ListUser>}></Route>
        <Route path="/newUser" element={<NewUse></NewUse>}></Route>
        <Route path="/newCatalog" element={<NewCatalog></NewCatalog>}></Route>
        <Route path="/updateCatalog" element={<UpdateCatalog></UpdateCatalog>}></Route>
        <Route path="/CreateProduct" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/Topping" element={<Topping></Topping>}></Route>
        <Route path="/NewTopping" element={<NewTopping></NewTopping>}></Route>
        <Route path="/UpdateProduct" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path="/UpdateTopping" element={<UpdateTopping></UpdateTopping>}></Route>
        <Route path="/DetailProduct" element={<Detail></Detail>}></Route>
        <Route path="/DetailTopping" element={<ToppingDetail></ToppingDetail>}></Route>
        

      </Route>
  </Routes>
  </>
  );
}

export default AppAdmin;
