import React from "react";
import menuImg from "../images/icon-close-menu.svg";
import ListMenu from "./ListMenu";


function Menu(props) {

  

  //puting the state on a arrow function, you can access the propieties of this directly
  // in this case, i used the ...state, to spread all data, and called propiety feature to just
  // attribute new value to this, with feature: !state.feature (add the different value of actual state)

  return (
    <div className={props.menuShow ? "menu" : "menu hide"}>
      <header className="closeMenu">
        <img
          onClick={() => {
            props.onMenuHide();
          }}
          src={menuImg}
          alt="menuImg"
          id="menuImg"
        />
      </header>
      <ListMenu setActive={props.setActive} active={props.active}></ListMenu>
    </div>
  );
}

export default Menu;
