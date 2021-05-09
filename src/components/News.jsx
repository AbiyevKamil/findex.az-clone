import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import style from "../styles/News.module.css";

export const News = () => {
  const hotic =
    "Soyuq günlər artıq qapıdadır! Hazırlıq görməyin əsl vaxtıdır. Yeni kolleksiyalar hər kəsin zövqünə uyğun olan HOTİÇ markasının 60% endirimləri davam edir. Siz sifariş edin, biz gətirə";

  const nine =
    "NINE WEST ayaqqabılarını FİNDEX.AZ-dan sifariş etmək çox asandır! Bəyəndiyiniz məhsulun linkini yerləşdirin, biz sizin üçün sifariş edək!";
  return (
    <div className={style.news}>
      <div className={style.news_top}>
        <div className={style.news_top_left}></div>
        <div className={style.news_top_right}>
          <h1 className={style.news_top_header}>
            <b>Trend</b>-də olan xəbərlər
          </h1>
          <div className={style.news_self}>
            <a href="https" className={style.news_links}>
              <h2 className={style.head}>Nine West</h2>
              <div className={style.top_description}>
                <p>{nine.substring(0, 80)}...</p>
              </div>
              <div className={style.time}>20 noyabr 2020, 23:28</div>
            </a>
          </div>
          <div className={style.news_self}>
            <a href="https" className={style.news_links}>
              <h2 className={style.head}>Hotiç</h2>
              <div className={style.top_description}>
                <p>{hotic.substring(0, 80)}...</p>
              </div>
              <div className={style.time}>20 noyabr 2020, 23:15</div>
            </a>
          </div>
          <div className={style.register}>
            <button className={style.register_btn}>
              <b>Qeydiyyat</b>dan keç
            </button>
          </div>
        </div>
      </div>

      <div className={style.news_bottom}>
        <div className={style.news_container}>
          <div className={style.bottom_news}>
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

          <div className={style.bottom_news}>
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

      <div className={style.pagination_container}>
        <Pagination
          count={1}
          variant="text"
          shape="rounded"
          color="standard"
          size="large"
        />
      </div>
    </div>
  );
};
