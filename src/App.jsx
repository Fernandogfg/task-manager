import "./App.css";
import HeaderContainer from "./assets/components/headerContainer";
import Logo from "./assets/components/logo/index";
import MainContainer from "./assets/components/mainContainer";

function App() {
  return (
    <>
      <header>
        <Logo />
        <HeaderContainer></HeaderContainer>
        <MainContainer />
      </header>
    </>
  );
}

export default App;
