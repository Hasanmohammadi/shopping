import Navbar from "~src/components/firstpage/navbar/Navbar";
import { SINGLE_PRODUCTS_URL } from "../../url";
import {container , title , text , descriptions , spans , information ,picturesDiv} from "./product.module.css"
const singleProduct = ({product}) => {
    const {name , price , description , id , company} = product
  return <>
      <Navbar/>
      <div className={container}>
          <div className={picturesDiv}>
              
          </div>
          <div className={information}>
              <h1 className={title}>{name}</h1>
              <h3 className={text} >{`$${price}`}</h3>
              <p className={descriptions} >{description}</p>
              <p className={text} >Available: <span className={spans}>{id}</span></p>
              <p className={text} >SKU: <span className={spans}>{id}</span></p>
              <p className={text} >Brand:<span className={spans}>{company}</span></p>
              <hr/>

          </div>

      </div>

  </>;
};

export default singleProduct;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  const response = await fetch(`${SINGLE_PRODUCTS_URL}${id}`);
  const product = await response.json();


  return {
    props: {
      product,
    },
  };
};
