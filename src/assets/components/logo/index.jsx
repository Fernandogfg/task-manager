import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
function Logo() {
  
  return (
    <Link to='/'>
      <img src={logoImg} id="logo" />
    </Link>
  );
}
export default Logo;
