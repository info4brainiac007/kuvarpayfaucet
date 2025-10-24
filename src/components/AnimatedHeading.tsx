import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#cdf140] text-center"
    >
      Welcome to KuvarPay Faucet
    </motion.h1>
  );
}