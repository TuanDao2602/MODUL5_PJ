
import Index from './home/Index';
import {  Routes, Route } from "react-router-dom";
import Menu from "../user/menu/Menu"
import Book from '../user/order/Book';
import About from '../user/about/About';
import Cart from '../user/cart/ListCart';
import Detail from '../user/Product/Detail';
import Login from './login/Login';
import Register from './register/Register'
import './css/bootstrap.scoped.css';
import './css/addTheme.scoped.css'
import './css/style.scoped.css'
import './css/login.scoped.css'

// import './css/font-awesome.min.scoped.css'

function AppUser() {
  return (
    <div>

  <Routes>
      <Route>
      <Route path="/" element={<Index></Index>}>  </Route>
      <Route path="/Menu" element={<Menu></Menu>}></Route>
        <Route path="/Book" element={<Book></Book>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/Detail" element={<Detail></Detail>}></Route>
        <Route path="/Singin" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        </Route>
      

      {/* <Route path="/admin" element={<Nav></Nav>}>
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
      </Route>
     */}
  </Routes>
  
  </div>
  );
}

export default AppUser;
