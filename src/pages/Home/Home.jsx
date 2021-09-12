import "./Home.css";
import ReactTypingEffect from "react-typing-effect";
import vid from '../../img/video.mp4';
import { motion } from "framer-motion";


const Home = () => {
  return (
    <main>

      <div className="left">
        <h1 className="shadow mb-4">
          <ReactTypingEffect
            text={["Petroleum Engineering Library", "Mohamed Mujtaba"]}

          />
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</p>
        <p> sit amet consectetur adipisicing </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, harum?</p>
        <p>Lorem amet consectetu</p>
        <p>Lorem  sit amet consectetur adipisicing elit</p>
        <motion.button
          className="btn mt-4 shadow" disabled
          whileHover={{
            scale: 1.02,
            opacity: .9,
            backgroundColor: '#fff',
            color: '#0d6efd'
          }}

        >
          Login
        </motion.button>

      </div>
      {/* <div className="right"></div> */}
      <div className="video-container">
        <video src={vid} loop muted autoPlay></video>
      </div>
    </main>
  );
};

export default Home;
