import style from "../../../styles/navbar.module.css";
import Link from "next/link";
import { UserAddOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className={style.container}>
      <img
        src={"https://s4.uupload.ir/files/logo_koho.png"}
        alt={"logo"}
        className={style.logo}
      />
      <ul className={style.list}>
        <li>
          <Link href="/">
            <a className={style.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={style.link}>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={style.link}>About</a>
          </Link>
        </li>
      </ul>
      <div className={style.userDiv}>
        <Link href="/" >
        <a className={style.userLink} >
            Cart <ShoppingCartOutlined />
          </a>
        </Link>

        <Link href="/">
          <a className={style.userLink}>
            Login <UserAddOutlined />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
