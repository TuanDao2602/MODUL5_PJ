import React from 'react'

export default function Panner() {
  return (
    <div>
         <section className="slider_section ">
         <div className="bg-box">
  <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/background-tra-sua-thiet-ke-banner-poster-quang-cao.jpg" alt="" />
</div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                  {/* <div className="bg-box">
      <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/background-tra-sua-thiet-ke-banner-poster-quang-cao.jpg" alt="" />
    </div> */}
                    <h1>Sữa Tươi Trân Châu Đường Đen</h1>
                    <p>
                      giải nhiệt mùa hè
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>Fast Food Restaurant</h1>
                    <p>
                      Doloremque, itaque aperiam facilis rerum, commodi,
                      temporibus sapiente ad mollitia laborum quam quisquam esse
                      error unde. Tempora ex doloremque, labore, sunt repellat
                      dolore, iste magni quos nihil ducimus libero ipsam.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>Fast Food Restaurant</h1>
                    <p>
                      Doloremque, itaque aperiam facilis rerum, commodi,
                      temporibus sapiente ad mollitia laborum quam quisquam esse
                      error unde. Tempora ex doloremque, labore, sunt repellat
                      dolore, iste magni quos nihil ducimus libero ipsam.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#customCarousel1" data-slide-to={1} />
            <li data-target="#customCarousel1" data-slide-to={2} />
          </ol>
        </div>
      </div>
    </section>
        </div>
  )
}
