import React, { useEffect, useState } from "react";
import menuImg from "../images/icon-close-menu.svg";
import arowDown from "../images/icon-arrow-down.svg";

function Menu(props) {
  const [active, setActive] = useState({ feature: false, company: false });

  useEffect(()=>{
    console.log(active)
  },[]);

  useEffect(()=>{
    console.log(active)
  },[active])

  function addActive(){
    active.map()
  }

  function updateFeature(e){
    let novaAtualizacao = [{ feature: true}];
    setActive(state => {
      return { ...state, feature: !state.feature };
    });
  }

  function updateCompany(e){
    let novaAtualizacao = [{ feature: true}];
    setActive(state => {
      return { ...state, company: !state.company };
    });
  }

  return (
    <div className={props.menuShow ? "menu" : "menu hide"}>
      <header className="closeMenu">
        <img
          onClick={() => {
            props.onMenuHide();
          }}
          src={menuImg}
          alt="menuImg"
        />
      </header>
      <ul className="listmMenu">
        <li>
          Features{" "}
          <button onClick={()=>{updateFeature()}}>
            <img src={arowDown} alt="arrowDown" />
          </button>
        </li>
        <li>
          Company{" "}
          <button onClick={()=>{updateCompany()}}>
            <img src={arowDown} alt="arrowDown" />
          </button>
        </li>
        <li>Carrers</li>
        <li>About</li>
        <button className="login menuButton">Login</button>
        <button className="register menuButton">Register</button>
      </ul>
    </div>
  );
}

export default Menu;
