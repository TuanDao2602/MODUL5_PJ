import React from 'react'
import ListProduct from '../Product/ListProduct'

export default function MenuPage() {
  return (
   <>
       
  {/* food section */}
  <section className="food_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Our Menu</h2>
      </div>
      <ul className="filters_menu">
        <li className="active" data-filter="*">
          All
        </li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>
      <ListProduct/>
      <div className="btn-box">
        <a href="">View More</a>
      </div>
    </div>
  </section>
  {/* end food section */}
  {/* footer section */}
 

  </>
  )
}
