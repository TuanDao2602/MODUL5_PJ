import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default function Book() {
  return (
    
       <>
       <Header/>
  
  {/* book section */}
  <section className="book_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>Book A Table</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form action="">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
             
              <div>
                <input type="date" className="form-control" />
              </div>
              <div className="btn_box">
                <button>Book Now</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container ">
           
            <img src="http://media.vietq.vn/files/lelan/2020/11/05/tra-hoa-nhai-5-11-2020.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end book section */}
  {/* footer section */}
  <Footer/>

</>
  )
}
