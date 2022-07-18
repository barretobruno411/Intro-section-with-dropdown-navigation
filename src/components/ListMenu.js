import React from 'react';

import arowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import todoIcon from "../images/icon-todo.svg";
import calendarIcon from "../images/icon-calendar.svg";
import reminderIcon from "../images/icon-reminders.svg";
import iconPlaning from "../images/icon-planning.svg";

function ListMenu(props){

    function updateFeature(e){
        props.setActive(state => {
          return { ...state, feature: !state.feature };
        });
      }
    
      function updateCompany(e){
        props.setActive(state => {
          return { ...state, company: !state.company };
        });
      }

    return(
        <>
        <ul className="listmMenu">
        <li>
          Features{" "}
          <button className="dropdownBTN" onClick={()=>{updateFeature()}}>
            <img src={props.active.feature ? arrowUp : arowDown} alt="arrowDown" />
          </button>
          <ul className={props.active.feature ? "subMenu" : "subMenu hide"}>
            <li><img src={todoIcon} alt="todoIcon" /> Todo List</li>
            <li><img src={calendarIcon} alt="calendarIcon" /> Calendar</li>
            <li><img src={reminderIcon} alt="reminderIcon" /> Reminders</li>
            <li><img src={iconPlaning} alt="iconPlaning" /> Planning</li>
          </ul>
        </li>
        <li>
          Company{" "}
          <button className="dropdownBTN" onClick={()=>{updateCompany()}}>
            <img src={props.active.company ? arrowUp : arowDown} alt="arrowDown" />
          </button>
          <ul className={props.active.company ? "subMenu" : "subMenu hide"}>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>Carrers</li>
        <li>About</li>
      </ul>
      <div className='divButtons'>
      <button className="login menuButton">Login</button>
      <button className="register menuButton">Register</button>
      </div>
      
        </>
        
    )
}

export default ListMenu;