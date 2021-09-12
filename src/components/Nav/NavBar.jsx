import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';
import { navigation } from '../../data/navigaton';
import img from "../../img/engineer.png";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { motion } from 'framer-motion';
import { Example } from '../try/Try';
import SideBar from '../sideBar/SideBar';



const NavBar = ({ isClicked, handelCliced }) => {
  const [navBar, setNavBar] = useState(false);
  // const [isClicked, setIsCliced] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('scroll', changeNav);
  return (
    <nav className={navBar ? 'active' : null}>
      <div className="logo"><h1>MJ</h1></div>
      <SideBar isClicked={isClicked} />

      <div className="navigation">
        {/* <div className="person">
          <a>
            <img src={img} alt="person" />
          </a>
        </div> */}
        <div className="btn-taggle" style={{ cursor: 'pointer' }} onClick={handelCliced}>
          <motion.button

            style={{
              position: 'absolute',
              background: 'none',
              color: `${isClicked ? 'black' : 'inherit'}`,
              cursor: 'pointer',
              scale: `${isClicked ? 1 : 0}`,
            }}
            disabled={isClicked ? false : true}
            initial={{
              opacity: 0,
              x: '70px'
            }}
            animate={{
              x: `${isClicked ? 0 : '70px'}`,
              opacity: `${isClicked ? 1 : 0}`,

            }}
          >
            <CloseRoundedIcon style={{ height: '40px', width: '40px' }} />
          </motion.button>
          <motion.button
            style={{
              background: 'none',
              color: 'inherit',
              cursor: 'pointer',
              scale: `${isClicked ? 0 : 1}`,
            }}
            disabled={isClicked ? true : false}
            initial={{
              opacity: 1,
              x: 0,
              rotate: 0
            }}
            animate={{
              x: `${isClicked ? '-70px' : 0}`,
              opacity: `${isClicked ? 0 : 1}`,

            }}
          >
            <MenuRoundedIcon style={{ height: '40px', width: '40px' }} />
          </motion.button>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
