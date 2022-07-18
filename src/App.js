import Header from "./components/Header";
import img from "./images/image-hero-mobile.png";
import imgDesk from "./images/image-hero-desktop.png";
import InfoContent from "./components/InfoContent";
import "./App.css";
import Media from "react-media";
import matchers from "@testing-library/jest-dom/matchers";

function App() {
  let intFrameWidth = window.innerWidth;
  if (intFrameWidth.valueOf() < 400) {
    return <h1>nanana</h1>;
  } else {
    return (
      <div className="App">
        <Header></Header>
        <body>
          <Media query="(min-width: 1024px)">
            {(matches) => {
              if (matches) {
                return (
                  <div className="imageDesk">
                  <img
                    className="backgroundDesktopImage"
                    src={imgDesk}
                    alt="imageHero"
                  />
                  </div>
                );
              } else {
                return (
                    <img
                      className="backgroungImage"
                      src={img}
                      alt="imageHero"
                    />
                );
              }
            }}
          </Media>

          <InfoContent></InfoContent>
        </body>
      </div>
    );
  }
}

export default App;
