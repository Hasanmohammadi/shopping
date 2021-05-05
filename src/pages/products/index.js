import Head from "next/head";
import Navbar from "~components/firstpage/navbar/Navbar";
import { Row, Col } from "antd";
import { PRODUCTS_URL } from "~src/url";

import "antd/dist/antd.css";
import style from "./productsPage.module.css";
import { useSelector } from "react-redux";

const ProductsPage = ({products}) => {
  // const products = useSelector((state) => state.products);

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={style.container}>
        <div>
          <Row gutter={[20, 17]} justify={"end"} className={style.gridContainer}>
            {products.map(({ image, name, price, id }) => {
              return (
                <Col xs={22} sm={11} lg={7} key={id} className={style.product}>
                  <img src={image} alt={name} className={style.image} />
                  <span className={style.name}>{`${name}`}</span>
                  <span className={style.price}>{`$${price}`}</span>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;


export const getServerSideProps = async (ctx) => {


  const response = await fetch(PRODUCTS_URL);
  const data = await response.json();

  
  return {
    props: {
      products: data,
    },
  };
};
