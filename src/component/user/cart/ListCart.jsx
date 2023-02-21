import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Cart from './Cart'

export default function ListCart() {
  return (

    <div className="main-content-wrapper clearfix">
 
    <Header/>
    {/* Header Area End */}
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="cart-title mt-50">
              <h2>Shopping Cart</h2>
            </div>
            <div className="cart-table clearfix">
              <table className="table table-responsive">
                <thead>
                  <tr>
                  <th></th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
               <Cart/>
               <Cart/>
               <Cart/>
               <Cart/>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Cart Total</h5>
              <ul className="summary-table">
                <li>
                  <span>subtotal:</span> <span>$140.00</span>
                </li>
                <li>
                  <span>delivery:</span> <span>Free</span>
                </li>
                <li>
                  <span>total:</span> <span>$140.00</span>
                </li>
              </ul>
              <div className="cart-btn mt-100">
                <a href="" className="btn amado-btn w-100">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>


  )
}
