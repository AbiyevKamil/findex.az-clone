import Carousel from "styled-components-carousel";
import style from "../styles/Carousel.module.css";

function CarouselComponent() {
  return (
    <Carousel
      className={style.carousel}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      infiniteLoop={false}
      transitionTime={200}
      useKeyboardArrows={true}
      pauseOnMouseOver={false}
    >
      <div>
        <img
          className={style.carousel_img}
          src="https://api.findex.az/storage/banner/a15afff3ecfeff8ed65e45177ee74dc7.png"
          alt=""
          width="100%"
        />
      </div>
      <div>
        <img
          className={style.carousel_img}
          src="https://api.findex.az/storage/banner/333d662fecc01393ebc3954772a092b9.png"
          alt=""
          width="100%"
        />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
