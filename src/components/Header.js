import React, { useState } from "react";
import logoImg from "../images/logo.svg";
import menuImg from "../images/icon-menu.svg";
import Menu from '../components/Menu'

function Header(props) {


  const [menuShow, setMenuShow] = useState(false);

  function onMenuShow(){
    return setMenuShow(true);
  }

  function onMenuHide(){
    return setMenuShow(false)
  }

  return (
    <header className="header">
      <div className={menuShow ? "courtine" : "courtine hide"}></div>
      <img src={logoImg} alt="logo" />
      <nav>
        <img
          src={menuImg}
          alt="menu"
          onClick={() => {
            onMenuShow()
          }}
        />
      </nav>
      <Menu setActive={props.setActive} active={props.active} onMenuHide={onMenuHide} menuShow={menuShow}></Menu>
    </header>
  );
}

export default Header;
