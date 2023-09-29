import s from'./App.module.css';
import Content from "./Components/Content/Content";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
  return (
    <div className={s.App}>
      <HeaderContainer />
      <Content />
    </div>
  );
}

export default App;
