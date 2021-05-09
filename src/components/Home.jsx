import React from "react";
import CarouselComponent from "./Carousel";
import Calculator from "./Calculator";
import style from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 8,
    lazyLoad: true,
    swipeToSlide: true,
    autoplaySpeed: 10000,
    arrows: false,
  };
  return (
    <main className={style.homepage}>
      <CarouselComponent />
      <div className={style.calculator_section}>
        <Calculator />
        <div className={style.calculator_description}>
          <h1 className={style.warning}>DİQQƏT!</h1>
          <p className={style.anounce}>
            Türkiyə sifariş olunan bağlamanın çatdırılma haqqı çəkiyə görə
            hesablanır.
          </p>
          <p className={style.anounce}>
            Ölçüsü 40 santimetrdən böyük olan bağlamaların çatdırılma haqqı
            həcmi çəkiyə görə hesablanır. Həcmi çəkinin hesablanması üçün:
          </p>
          <p className={style.anounce}>
            <span className={style.math}>( e * h * u / 6000 ) * q</span> -
            standartı tətbiq edilir{" "}
          </p>
          <p className={style.math}>
            e - en, h - hündürlük, u - uzunluq, q - qiymət
          </p>
        </div>
      </div>
      <div className={style.news_section}>
        <div className={style.news_header}>
          <h1 className={style.small_header}>ƏN SON</h1>
          <h1 className={style.big_header}>YENİLİKLƏR</h1>
          <div className={style.header_bottom}></div>
        </div>
        <div className={style.news_container}>
          <div className={style.news}>
            <a href="https" className={style.news_link}>
              <img
                className={style.news_image}
                src="https://api.findex.az/storage/news/707e652f1b1964a2712c49aad9aafdf9.png"
                alt=""
              />
              <p className={style.news_timestamp}>2020-11-20 23:28:06</p>
              <h3 className={style.news_head}>Nine West</h3>
              <p className={style.news_description}>
                NINE WEST ayaqqabılarını FİNDEX.AZ-dan sifariş etmək çox
                asandır! Bəyəndiyiniz məhsulun linkini yerləşdirin, biz sizin
                üçün sifariş edək!
              </p>
            </a>
          </div>

          <div className={style.news}>
            <a href="https" className={style.news_link}>
              <img
                className={style.news_image}
                src="https://api.findex.az/storage/news/1397a79c3aa006b1ef091ac6e1484b7c.png"
                alt=""
              />
              <p className={style.news_timestamp}>2020-11-20 23:15:08</p>
              <h3 className={style.news_head}>Hotiç</h3>
              <p className={style.news_description}>
                Soyuq günlər artıq qapıdadır! Hazırlıq görməyin əsl vaxtıdır.
                Yeni kolleksiyalar hər kəsin zövqünə uyğun olan HOTİÇ markasının
                60% endirimləri davam edir. Siz sifariş edin, biz gətirək
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className={style.shops}>
        <div className={style.shop_header}>
          <h1>MAĞAZALAR</h1>
        </div>
        <div className={style.shop_container}>
          <Slider {...settings}>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/cacf0c5c75973552cbf11485ef67245e.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/d05dd6e242faa600e6163587bac7ab5f.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/2084f9f2cfbe1642f21e632fe0b2f76c.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/2c695e5baf1494981a24ebf88e9ac96f.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/08b8b93c9cda26c22ec5dd3ceae6455f.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/756e134cf0717c1123916847feea7e95.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/f8d3fcd2d11a83535b9faf373a71e1ba.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/018719d98540de66e539c701e68409a1.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/90d2364de0a78ac4aed7e7a799d00c07.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/db72fa8e032dd0223d2519d5365ec9ad.png"
                  alt=""
                />
              </a>
            </div>
            <div className={style.shop}>
              <a href="https" className={style.shop_link}>
                <img
                  className={style.shop_img}
                  src="https://api.findex.az/storage/shop/e766907d7ebed3cbe2d04f6369587d3b.png"
                  alt=""
                />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
};
