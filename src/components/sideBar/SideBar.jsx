import { useState } from 'react';
import './Sidebar.css';

const SideBar = ({ isClicked }) => {

  return (
    <div className={` ${isClicked ? 'side-bar on' : 'side-bar'}`}>

    </div>
  );
};

export default SideBar;
