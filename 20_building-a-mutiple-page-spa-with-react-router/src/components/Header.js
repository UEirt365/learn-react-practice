import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/welcome"}>Welcome</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
