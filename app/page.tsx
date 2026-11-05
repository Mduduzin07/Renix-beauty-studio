"use client";

import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="font-primary min-h-screen flex items-center overflow-x-hidden"
    >
      Home Page
    </motion.section>
  );
}

export default Home;
