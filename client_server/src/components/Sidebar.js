import React, {useState} from 'react';
import {SidebarContents} from './sidebarOptions';
import './sidebar.css';
import {Link} from 'react-router-dom';
import * as Icons from 'react-icons/io5';


function Sidebar() {

    const[sidebarState,setsidebar]=useState(false);
    const toggleSidebar=()=>setsidebar(!sidebarState);

    return(
    <div className='fullSidebar'>
        <div className ='bar'>
            <Link to='#' className='menuButton'>
                <Icons.IoMenuSharp color='#fff' onMouseOver={toggleSidebar}/>
            </Link>
            <Link to='/contact' className='topButtons' style={{ textDecoration: 'none' }}><Icons.IoChatbubblesSharp color='#fff'/>CONTACT</Link>
            <Link to='/aboutus' className='topButtons' style={{ textDecoration: 'none' }}><Icons.IoInformationCircle color='#fff'/>ABOUT US</Link>
            <Link to='/' className='topButtons' style={{ textDecoration: 'none',position: 'absolute', right: 20 }}><Icons.IoLogOutOutline color='#fff'/>Logout</Link>
        </div>
        <nav className={sidebarState ? 'menu open':'menu'}>
            <ul className='full-menu' onClick={toggleSidebar}>
                <li className='close-menu'> 
                    <Link to='#' className='closeButton'><Icons.IoCloseCircle color='#fff'/></Link>
                </li>
                {SidebarContents.map((option,id)=>{
                    return(
                        <li key={id} className={option.className}>
                            <Link to={option.path}>
                                {option.icon}
                                <span>{option.title}</span>
                            </Link>
                        </li>
                    );
                  }
                )}
            </ul>
        </nav>
    </div>
    );
}

export default Sidebar;
