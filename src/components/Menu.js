import React from "react";
import menuImg from "../images/icon-close-menu.svg";

function Menu(props) {

    
  return (
    <div className={props.menuShow ? "menu" : "menu hide"}>
      <header className="closeMenu">
        <img onClick={()=>{props.onMenuHide()}} src={menuImg} alt="menuImg" />
      </header>
      <ul className="listmMenu">
        <li>Features</li>
        <li>Company</li>
        <li>Carrers</li>
        <li>About</li>
        <button className="login menuButton">Login</button>
        <button className="register menuButton">Register</button>
      </ul>
    </div>
  );
}

export default Menu;
