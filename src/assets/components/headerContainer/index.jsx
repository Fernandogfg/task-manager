import Breadcrumb from "../breadCrumb";
import Busca from "../busca";
import Logo from "../logo";
function HeaderContainer() {
  return (
    <header id="headerContainer">
      <Logo />
      <Breadcrumb />
      <Busca />
    </header>
  );
}
export default HeaderContainer;
