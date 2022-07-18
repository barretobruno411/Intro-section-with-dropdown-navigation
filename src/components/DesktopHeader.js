import React from 'react';
import ListMenu from './ListMenu';
import Logo from '../images/logo.svg';

function DesktopHeader(props){

    return(

        <header className='header'>
            <img src={Logo} alt="logo" />
            <ListMenu setActive={props.setActive} active={props.active}></ListMenu>
            
        </header>

    )
}

export default DesktopHeader;