import "./App.css";
import Weather from "./components/Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lima" />

        <footer>
          This project was code by {""}
          <a
            href="https://ivonnebenitesrodriguez.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ivonne Benites
          </a>
          {""}
          and is {""}
          <a
            href="https://github.com/IvonneBenitesRodriguez/weather_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
          {""}
          and {""}
          <a href="" target="_blank" rel="noopener noreferrer">
            hosted on Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
