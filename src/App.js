import Header from './components/Header';
import img from "./images/image-hero-mobile.png";
import InfoContent from "./components/InfoContent";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <img className="backgroungImage" src={img} alt="imageHero" />
        <InfoContent></InfoContent>
      </body>
    </div>
  );
}

export default App;
