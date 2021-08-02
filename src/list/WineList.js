import React, { Component } from 'react';
import './WineList.css';
import logo from '../image/wine3.png';


class WineList extends Component {
  render() {
    return(
      <body>
        <div className="container">

          <div className="row">

            <div className="col-lg-3">

              <h1 className="my-4">Wainary Shop</h1>
              <div className="list-group">
                <a href="#" className="list-group-item">프랑스</a>
                <a href="#" className="list-group-item">이탈리아</a>
                <a href="#" className="list-group-item">스페인</a>
              </div>

            </div>

            <div className="col-lg-9">

              <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid w-full" src={logo} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <article className="flex flex-row justify-between p-1 absolute">
                      <h5 className="w-28 text-left px-1">프랑스</h5>
                      <h5 className="w-32 text-right">스파클링</h5>
                    </article>
                    <a href="#"><img className="card-img-top" src="https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168942.png" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">드 샹세니, 소뮈르 브뤼</a>
                      </h4>
                      <h5>30,000원</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <article className="flex flex-row justify-between p-1 absolute">
                      <h5 className="w-28 text-left px-1">프랑스</h5>
                      <h5 className="w-32 text-right">로제</h5>
                    </article>
                    <a href="#"><img className="card-img-top" src="https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168939.png" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">에스탕동 제니스</a>
                      </h4>
                      <h5>25,000원</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <article className="flex flex-row justify-between p-1 absolute">
                      <h5 className="w-28 text-left px-1">이탈리아</h5>
                      <h5 className="w-32 text-right">레드</h5>
                    </article>
                    <a href="#"><img className="card-img-top" src="https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168933.png" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">로르나노, 키안티 클라시코</a>
                      </h4>
                      <h5>45,000원</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <article className="flex flex-row justify-between p-1 absolute">
                      <h5 className="w-28 text-left px-1">미국</h5>
                      <h5 className="w-32 text-right">레드</h5>
                    </article>
                    <a href="#"><img className="card-img-top" src="https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168926.png" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">라 크레마 몬터레이 피노누아</a>
                      </h4>
                      <h5>82,000원</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <article className="flex flex-row justify-between p-1 absolute">
                      <h5 className="w-28 text-left px-1">호주</h5>
                      <h5 className="w-32 text-right">레드</h5>
                    </article>
                    <a href="#"><img className="card-img-top" src="https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168921.png" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">울프 블라스, 헤리티지 릴리즈</a>
                      </h4>
                      <h5>26,000원</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <article className="flex flex-row justify-between p-1 absolute">
                      <h5 className="w-28 text-left px-1">스페인</h5>
                      <h5 className="w-32 text-right">레드</h5>
                    </article>
                    <a href="#"><img className="card-img-top" src="https://wine21.speedgabia.com/WINE_MST/IMAGE/0168000/T0168919_001.png" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">페드라롱가, 도우미아</a>
                      </h4>
                      <h5>88,000원</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        <footer class="py-4 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
          </div>
        </footer>


      </body>
    );
  }
}

export default WineList;