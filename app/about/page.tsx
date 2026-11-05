"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="font-primary min-h-screen flex items-center overflow-x-hidden"
    >
      About
    </motion.section>
  );
}

export default About;
