
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import style from "../../../styles/firstPage.module.css"


const CarouselComponnet  = () => {
    return (
        <Carousel autoplay className={style.carousel}>
          <div>
            <h3 className={style.post}>1</h3>
          </div>
          <div>
            <h3 className={style.post}>2</h3>
          </div>
          <div>
            <h3 className={style.post}>3</h3>
          </div>
          <div>
            <h3 className={style.post}>4</h3>
          </div>
          <div>
            <h3 className={style.post}>5</h3>
          </div>
        </Carousel>
      );
}
 
export default CarouselComponnet ;