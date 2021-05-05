import "antd/dist/antd.css";
import { Carousel } from "antd";
import style from "../../../styles/firstPage.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CarouselComponnet = () => {
  const [error, setError] = useState(true);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length !== 0) {
      setError(false);
    }
  }, [products]);

  return error ? null : (
    <Carousel autoplay className={style.carousel}>
      <div>
        <img src={products[15].image} alt="" className={style.post} />
      </div>
      <div>
        <img src={products[3].image} alt="" className={style.post} />
      </div>
      <div>
        <img src={products[11].image} alt="" className={style.post} />
      </div>
      <div>
        <img src={products[6].image} alt="" className={style.post} />
      </div>
    </Carousel>
  );
};

export default CarouselComponnet;
