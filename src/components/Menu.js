import React, { useEffect, useState } from "react";
import menuImg from "../images/icon-close-menu.svg";
import arowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import todoIcon from "../images/icon-todo.svg";
import calendarIcon from "../images/icon-calendar.svg";
import reminderIcon from "../images/icon-reminders.svg";
import iconPlaning from "../images/icon-planning.svg";
function Menu(props) {
  const [active, setActive] = useState({ feature: false, company: false });

  useEffect(()=>{
    console.log(active)
  },[]);

  useEffect(()=>{
    console.log(active)
  },[active])

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
          <button className="dropdownBTN" onClick={()=>{updateFeature()}}>
            <img src={active.feature ? arrowUp : arowDown} alt="arrowDown" />
          </button>
          <ul className={active.feature ? "subMenu" : "subMenu hide"}>
            <li><img src={todoIcon} alt="todoIcon" /> Todo List</li>
            <li><img src={calendarIcon} alt="calendarIcon" /> Calendar</li>
            <li><img src={reminderIcon} alt="reminderIcon" /> Reminders</li>
            <li><img src={iconPlaning} alt="iconPlaning" /> Planning</li>
          </ul>
        </li>
        <li>
          Company{" "}
          <button className="dropdownBTN" onClick={()=>{updateCompany()}}>
            <img src={active.company ? arrowUp : arowDown} alt="arrowDown" />
          </button>
          <ul className={active.company ? "subMenu" : "subMenu hide"}>
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
