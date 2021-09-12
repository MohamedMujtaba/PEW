import './style.css';
import NavBar from './components/Nav/NavBar';
import { motion  } from "framer-motion"
import Home from './pages/Home/Home';
import { Example } from './components/try/Try';
import SideBar from './components/sideBar/SideBar';
import { useState } from 'react';
function App() {

  const [isClicked, setIsCliced] = useState(false);
  const handelCliced = () => {
    setIsCliced(!isClicked);
  };
  return (
    <>
      <NavBar isClicked={isClicked} handelCliced={handelCliced} />
      
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      {/* <Example/> */}
      
    </>
  );
}

export default App;
