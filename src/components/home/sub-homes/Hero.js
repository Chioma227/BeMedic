import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero"
      >
        <Nav />
        <section className="lg:grid lg:grid-cols-2  justify-around items-center m-auto w-auto">
          <div className="text-sec">
            <motion.h1
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 1, delay: 0.7 }}
              className="text-5xl font-sans w-17 text-center my-9"
            >
              <span className="text-green-100">1000</span> opportunities
            </motion.h1>
            <motion.h3
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 1, delay: 1.3 }}
              className="text-left text-2xl w-96 m-auto tracking-wide"
            >
              The esaiest way to build different sites without many themes
            </motion.h3>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:1.7}}
            className="w-fit ml-auto mr-auto my-14">
              <Link
                to="appointment"
                className="bg-green-100 text-white font-bold text-xl px-3 py-2 rounded-md"
              >
                Make an appointment
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 700 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 0.7, delay: 0.9 }}
            className="hero-img"
          >
            <img
              src="https://themes.muffingroup.com/be/medic/wp-content/uploads/revslider/medic/slide-doctor-1.png"
              alt="doctor"
            />
          </motion.div>
        </section>
      </motion.main>
    </div>
  );
};

export default Hero;
