import Carousel from "react-elastic-carousel";

import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <Carousel itemsToShow={1}>
        <div className="flex justify-center items-center bg-banner relative ">
          <motion.div
            className=""
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "tween", stiffness: 20 }}
          >
            <img className="" src="https://i.ibb.co/fYzcDR1/left-side.png" />
          </motion.div>

          <motion.div
            className=""
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "tween", stiffness: 20 }}
          >
            <img src="https://i.ibb.co/RHSCYTV/right-side.png" />
          </motion.div>
          <motion.h1
            className="text-white text-5xl absolute drop-shadow-lg"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 20,
            }}
          >
            Community Food Sharing <br />
            and Surplus Reduction Platform
          </motion.h1>
        </div>
        <h1>gdfgd</h1>
        <h1>gdfgd</h1>
        <h1>gdfgd</h1>
        <h1>gdfgd</h1>
      </Carousel>
    </div>
  );
};

export default Banner;
