import Header from "./components/Header";
import DesktopHeader from "./components/DesktopHeader";
import img from "./images/image-hero-mobile.png";
import imgDesk from "./images/image-hero-desktop.png";
import InfoContent from "./components/InfoContent";
import "./App.css";
import Media from "react-media";
import React, {useState} from 'react';

function App() {

  const [active, setActive] = useState({ feature: false, company: false });

  return (
    <div className="App">
      <Media query="(min-width: 1024px)">
        {(matches) => {
          if(matches){
            return (
              <DesktopHeader setActive={setActive} active={active}></DesktopHeader>
            )
          } else {
            return (
              <Header setActive={setActive} active={active}></Header>
            )
          }
        }}
      </Media>
      
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

export default App;
