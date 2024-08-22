import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <motion.div
      className="relative h-screen w-full"
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      exit={{ opacity: 0 }}
    >
      <img
        src="/src/assets/movies.avif"
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <img
        src=""
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Good Bye</h1>
        <p className="text-xl text-white mt-4">See you again.</p>
        <Link className="my-10" to={"/"}>
          <button className="p-3 hover:underline text-white"> To Home </button>
        </Link>
      </div>
    </motion.div>
  );
};
