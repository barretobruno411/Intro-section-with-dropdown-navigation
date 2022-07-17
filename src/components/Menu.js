import React, { useEffect, useState } from "react";
import menuImg from "../images/icon-close-menu.svg";
import arowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
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
  //puting the state on a arrow function, you can access the propieties of this directly
  // in this case, i used the ...state, to spread all data, and called propiety feature to just
  // attribute new value to this, with feature: !state.feature (add the different value of actual state)
  function updateFeature(e){
    setActive(state => {
      return { ...state, feature: !state.feature };
    });
  }

  function updateCompany(e){
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
          <ul className={active.feature ? "featuresMenu" : "featuresMenu hide"}>
            <li>Todo List</li>
            <li>Calendar</li>
            <li>Reminders</li>
            <li>Planning</li>
          </ul>
        </li>
        <li>
          Company{" "}
          <button onClick={()=>{updateCompany()}}>
            <img src={arowDown} alt="arrowDown" />
          </button>
          <ul className={active.company ? "companyMenu" : "companyMenu hide"}>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
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
