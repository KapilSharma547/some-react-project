import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/" >
        About Us
        </NavLink>
        <NavLink  exact activeClassName="active_class" to="/contact">
        Contact Us
        </NavLink>
        <NavLink  activeClassName="active_class" to="/netflix">
            Card
        </NavLink>
        <NavLink activeClassName="active_class" to="/clock">
          Clock
        </NavLink>
        <NavLink activeClassName="active_class" to="/clockupdate">
          ClockUPdate
        </NavLink>
        <NavLink activeClassName="active_class" to="/slotemachine">
       SloteMachine
        </NavLink>
        <NavLink activeClassName="active_class" to="/form">
      Form
        </NavLink>
        <NavLink activeClassName="active_class" to="/todolist">
      Form
        </NavLink>
        <NavLink activeClassName="active_class" to="/webpage">
      Form
        </NavLink>
        </>
       
    );
};
export default Menu;
                       
                        
                
