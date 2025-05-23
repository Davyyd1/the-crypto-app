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

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="grid grid-cols-1 xl:grid-cols-3"
    >
      {/* my portfolio */}
      <div className="col-span-1 bg-[url('background-image.jpg')] bg-cover bg-center p-4 rounded-2xl mb-4 xl:mb-0 mr-2 bg-white/10 backdrop-blur-md border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <HiWallet className="text-white text-xl" />
          <p className="text-white text-xl">My Portfolio</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <p className="text-3xl">$23,569.00</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <HiArrowSmallUp />
          <span>10.5% (+$908)</span>
        </div>

        {/* <CrossLine /> */}
        <p
          className={`border-b-2 border-dashed border-gray-200 mt-[1.25rem] mb-4`}
        ></p>
        {/* size={"1"} borderDetail={"dashed"} color="white-50"  */}

        <div className="grid grid-cols-[1fr_1fr_auto] gap-3">
          <DepositBtn />
          <WithdrawBtn />
          <MoreActionsBtn />
        </div>
      </div>
      {/* my assets */}
      <div className="flex flex-col gap-3 border-2 border-gray-300 col-span-1 lg:col-span-2 p-4 rounded-2xl mb-4 md:mb-0 bg-black/70">
        <MyAssets />
      </div>
      <div className="gap-3 border-2 border-gray-300 col-span-1 lg:col-span-2 p-4 rounded-2xl mt-0 md:mt-4 bg-black/70">
        {/*header pentru chart */}
        <div className="flex justify-between">
          <div className=" border-gray-500">
            <select className="border-2 border-gray-300 rounded-lg text-lg text-white p-2 focus:outline-0">
              <option value="Ethereum">ETH Ethereum</option>
              <option value="Bitcoin">BTC Bitcoin</option>
              <option value="Polkadot">DOT Polkadot</option>
              <option value="Cardano">ADA Cardano</option>
            </select>
          </div>

          <div className="flex gap-2 justify-end border-2 bg-gray-100 border-gray-100 rounded-lg p-2">
            {/* <div className=" flex items-center text-gray-400">
              <IoIosGitMerge />
              </div> */}
            <div className="flex items-center">
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
        </div>
        {/* <CrossLine borderDetail={"solid"} /> */}
        <p
          className={`border-b-2 border-solid border-gray-200 mt-[1.25rem] mb-4`}
        ></p>
        {/* chart */}
        <div className="mt-4 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          corrupti sint adipisci placeat ab autem necessitatibus accusamus
          perferendis sed? Blanditiis nostrum incidunt veniam officiis animi ex
          possimus reprehenderit cupiditate quasi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quae ipsum sed porro nisi laborum.
          Numquam suscipit corporis, voluptates temporibus voluptatum rerum est
          amet nemo. Animi corporis quibusdam delectus impedit tenetur?
        </div>
      </div>

      <div className="col-span-1 p-4 rounded-2xl mb-4 xl:mb-0 bg-black/70 backdrop-blur-md border-2 border-gray-300 mt-4  md:mb-0 md:ml-2">
        <div className="grid grid-cols-2 border-2 bg-gray-100 border-gray-100 rounded-lg p-2">
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
        <p
          className={`border-b-2 border-solid border-gray-200 mt-[1.25rem] mb-4`}
        ></p>
        <div className="flex flex-col gap-3 relative">
          <div className="border-2 border-gray-300 rounded-lg text-lg  p-4 focus:outline-0 ">
            <p className="text-gray-500">Send</p>
            <div className="grid grid-cols-2 py-2">
              <p className="flex items-center text-3xl font-bold">0,000563</p>
              <div className="flex justify-end border-gray-500">
                <select className="border-2 border-gray-300 rounded-lg text-lg p-2 focus:outline-0">
                  <option value="Ethereum">ETH Ethereum</option>
                  <option value="Bitcoin">BTC Bitcoin</option>
                  <option value="Polkadot">DOT Polkadot</option>
                  <option value="Cardano">ADA Cardano</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center absolute top-[42.5%] left-[45%] bg-white border-2 border-gray-200 rounded-full p-2">
            <HiArrowsUpDown className="text-gray-400" />
          </div>

          <div className="border-2 border-gray-300 rounded-lg text-lg  p-4 focus:outline-0">
            <p className="text-gray-500">Send</p>
            <div className="grid grid-cols-2 py-2">
              <p className="flex items-center text-3xl font-bold">0,000563</p>
              <div className="flex justify-end border-gray-500">
                <select className="border-2 border-gray-300 rounded-lg text-lg p-2 focus:outline-0">
                  <option value="Ethereum">ETH Ethereum</option>
                  <option value="Bitcoin">BTC Bitcoin</option>
                  <option value="Polkadot">DOT Polkadot</option>
                  <option value="Cardano">ADA Cardano</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-2 mb-2">
          <p className="text-gray-400 text-md">Available portfolio</p>
          <p className="grid justify-end">0,026 BTC</p>
        </div>
        <ExchangeBtn />
      </div>
    </motion.div>
  );
}

export default Home;
