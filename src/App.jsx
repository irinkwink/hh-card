import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const style = {};

const App = () => {
  return (
    <div>
      <Header />

      <div className={style.card}>
        <div className={style.wrapper}>
          <dir className={style.image}>
            <img className={style.img} src="" alt="" />
            <p className={style.felicitation}>
            Поздравляю с днем рожденья!<br/>
            Пусть будет жизнь полна веселья,<br/>
            Не будет грусти и хлопот,<br/>
            А только счастье круглый год!<br/>
<br/>
            Желаю творческих успехов,<br/>
            Прекрасных дней, улыбок, смеха.<br/>
            Любви, душевного тепла,<br/>
            Как сказка, чтобы жизнь была!<br/>
            </p>
          </dir>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
