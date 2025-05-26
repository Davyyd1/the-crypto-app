import { AnimatePresence, motion } from "motion/react";
import {
  HiArrowSmallUp,
  HiArrowsUpDown,
  HiBell,
  HiCog6Tooth,
  HiFolderOpen,
  HiMiniBars3,
  HiWallet,
} from "react-icons/hi2";
// import CrossLine from "../components/CrossLine";
import DepositBtn from "../components/DepositBtn";
import WithdrawBtn from "../components/WithdrawBtn";
import MoreActionsBtn from "../components/MoreActionsBtn";
import MyAssets from "../components/MyAssets";
import { IoIosGitMerge } from "react-icons/io";
import { useState } from "react";
import SelectableBtn from "../components/SelectableBtn";
import ExchangeBtn from "../components/ExchangeBtn";

const periods = ["1D", "7D", "1M", "1Y", "ALL"];
const typeOfTransaction = ["Exchange", "Buy"];

const fancyBg = "bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#0f172a]";
const borderGlow = "border border-indigo-500/30 shadow-[0_0_10px_#6366f1aa]";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => setActiveIndex(index);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="grid grid-cols-1 xl:grid-cols-3 gap-4 p-4"
    >
      {/* Portfolio card */}
      <div className={`${fancyBg} ${borderGlow} rounded-2xl p-5`}>
        <div className="flex items-center gap-2 mb-4 text-indigo-400">
          <HiWallet className="text-xl" />
          <p className="text-xl font-medium">My Portfolio</p>
        </div>
        <p className="text-white text-4xl font-semibold mb-2">$23,569.00</p>
        <div className="flex items-center text-green-400 mb-4">
          <HiArrowSmallUp />
          <span className="ml-1">10.5% (+$908)</span>
        </div>
        <div className="border-b border-indigo-500/30 my-4" />
        <div className="grid grid-cols-[1fr_1fr_auto] gap-3">
          <DepositBtn />
          <WithdrawBtn />
          <MoreActionsBtn />
        </div>
      </div>

      {/* Assets */}
      <div
        className={`${fancyBg} ${borderGlow} flex flex-col gap-3 col-span-1 lg:col-span-2 p-4 rounded-2xl mb-4 md:mb-0`}
      >
        <MyAssets />
      </div>

      {/* Chart */}
      <div
        className={`${fancyBg} ${borderGlow} col-span-1 lg:col-span-2 rounded-2xl p-5`}
      >
        <div className="flex justify-between mb-4">
          <select className="bg-[#1e293b] text-white border border-indigo-500/30 rounded-lg p-2 focus:outline-none">
            <option>ETH Ethereum</option>
            <option>BTC Bitcoin</option>
            <option>DOT Polkadot</option>
            <option>ADA Cardano</option>
          </select>
          <div className="flex bg-[#1e293b] border border-indigo-500/30 rounded-lg p-2 gap-2">
            {periods.map((label, index) => (
              <SelectableBtn
                key={label}
                isActive={activeIndex === index}
                onClick={() => handleClick(index)}
              >
                {label}
              </SelectableBtn>
            ))}
          </div>
        </div>
        <div className="border-b border-indigo-500/30 mb-4" />
        <div className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          nobis! Architecto facilis, praesentium illo rerum...
        </div>
      </div>

      {/* Exchange */}
      <div className={`${fancyBg} ${borderGlow} col-span-1 rounded-2xl p-5`}>
        <div className="grid grid-cols-2 bg-[#1e293b] border border-indigo-500/30 rounded-lg p-2 mb-4">
          {typeOfTransaction.map((label, index) => (
            <SelectableBtn
              key={label}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            >
              {label}
            </SelectableBtn>
          ))}
        </div>

        <div className="flex flex-col gap-4 relative">
          {/* From input */}
          <div className="bg-[#1e293b] border border-indigo-500/30 rounded-lg p-4">
            <p className="text-sm text-gray-400">Send</p>
            <div className="grid grid-cols-2 mt-2">
              <p className="text-3xl font-bold text-white">0,000563</p>
              <select className="bg-transparent text-white border border-indigo-500/30 rounded-lg p-2 ml-auto">
                <option>ETH</option>
                <option>BTC</option>
                <option>DOT</option>
                <option>ADA</option>
              </select>
            </div>
          </div>

          {/* Swap icon */}
          <div className="absolute top-[42.5%] left-[45%] bg-indigo-500 text-white p-2 rounded-full shadow-md">
            <HiArrowsUpDown />
          </div>

          {/* To input */}
          <div className="bg-[#1e293b] border border-indigo-500/30 rounded-lg p-4">
            <p className="text-sm text-gray-400">Receive</p>
            <div className="grid grid-cols-2 mt-2">
              <p className="text-3xl font-bold text-white">0,000563</p>
              <select className="bg-transparent text-white border border-indigo-500/30 rounded-lg p-2 ml-auto">
                <option>ETH</option>
                <option>BTC</option>
                <option>DOT</option>
                <option>ADA</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-gray-400 mt-4 text-sm">
          <p>Available portfolio</p>
          <p className="text-white">0.026 BTC</p>
        </div>

        <ExchangeBtn />
      </div>
    </motion.div>
  );
}

export default Home;
