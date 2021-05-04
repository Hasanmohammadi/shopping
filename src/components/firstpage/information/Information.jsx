import style from "./information.module.css"

const Information = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>
        This store is one of the oldest online stores with more than a decade of
        experience, with adherence to three principles, payment on the spot,
        7-day money back guarantee and guarantee of authenticity of goods to
        become the largest online store in the world along with reputable stores
        Be.{" "}
      </p>
      <button  className={style.btn}>Shop Now</button>
    </div>
  );
};

export default Information;
