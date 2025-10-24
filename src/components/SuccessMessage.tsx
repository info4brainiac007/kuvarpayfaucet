import { motion } from "framer-motion";

export default function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#141414] border border-[#262626] rounded-xl p-8 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-2xl sm:text-3xl font-semibold text-[#cdf140]"
      >
        Submission Successful
      </motion.h2>
      <p className="mt-3 text-gray-300">Your KuvarPay test Token request has been received.</p>
      <p className="text-gray-400 text-sm mt-1">We’ve logged your details and will process shortly.</p>
    </motion.div>
  );
}