import s from'./App.module.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
