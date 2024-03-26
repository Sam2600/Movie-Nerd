import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import { HomeMaxOutlined } from "@mui/icons-material";

export const Logout = () => {
  return (
    <motion.div
      class="relative h-screen w-full"
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      exit={{ opacity: 0 }}
    >
      {/* <div class="relative h-screen w-full"> */}
      <img
        src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background Image"
        class="object-cover object-center w-full h-full"
      />
      <img
        src=""
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Good Bye</h1>
        <p class="text-xl text-white mt-4">See you again.</p>
        <Link className="my-10" to={"/"}>
          <button className="p-3 hover:underline text-white"> To Home </button>
        </Link>
      </div>
      {/* </div> */}
    </motion.div>
  );
};
