import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import movie from "../../assets/movie.jpg";

export const Logout = () => {
  return (
    <motion.div
      className="relative h-screen w-full"
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      exit={{ opacity: 0 }}
    >
      <img
        src={movie}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <img
        src=""
        // alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center ml-20">
        <h1 className="text-4xl text-black font-bold">Good Bye</h1>
        <p className="text-xl text-black mt-4">See you again.</p>
        <Link className="my-5" to={"/"}>
          <button className="hover:underline text-black"> To Home </button>
        </Link>
      </div>
    </motion.div>
  );
};
