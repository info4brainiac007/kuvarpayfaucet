import { useState } from "react";
import React from 'react';


import { motion } from "framer-motion";

export default function FaucetForm() {
  const [wallet, setWallet] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("KuvarPay Faucet submission:", { wallet, token, email });
  window.location.href = "/success";
};


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#141414] border border-[#262626] rounded-xl p-6 sm:p-8 shadow-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-white mb-1">Wallet Address</label>
          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            required
            placeholder="Enter your wallet address"
            className="w-full rounded-lg bg-transparent border border-[#262626] px-3 py-2 text-white placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#cdf140] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">Token Selection</label>
          <select
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full rounded-lg bg-transparent border border-[#262626] px-3 py-2 text-white outline-none transition focus:ring-2 focus:ring-[#cdf140] focus:border-transparent"
          >
            <option value="" disabled>
              Select a token
            </option>
            <option value="KVR">KVR</option>
            <option value="USDC">USDC</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full rounded-lg bg-transparent border border-[#262626] px-3 py-2 text-white placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#cdf140] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#cdf140] text-black font-semibold px-4 py-2 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#cdf140]"
        >
          Submit
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-3">Please fill all fields before submitting.</p>
    </motion.div>
  );
}