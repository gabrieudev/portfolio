"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full mt-14 mb-10">
      {/* circle */}
      <motion.svg
        className="absolute w-[300px] xl:w-[530px] h-[300px] xl:h-[530px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00BFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0", opacity: 0 }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
            opacity: 1,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </motion.svg>

      {/* image */}
      <div className="relative w-[290px] h-[290px] xl:w-[520px] xl:h-[520px] overflow-hidden rounded-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            layout="fill"
            alt="João Gabriel com uma camisa preta e a mão no queixo"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Photo;
