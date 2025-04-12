import { AnimatePresence, motion } from "motion/react";
import {
  HiArrowSmallUp,
  HiBell,
  HiCog6Tooth,
  HiFolderOpen,
  HiMiniBars3,
  HiWallet,
} from "react-icons/hi2";
import CrossLine from "../components/CrossLine";
import DepositBtn from "../components/DepositBtn";
import WithdrawBtn from "../components/WithdrawBtn";
import MoreActionsBtn from "../components/MoreActionsBtn";
import MyAssets from "../components/MyAssets";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="grid grid-cols-1  grid-rows-[auto_auto] lg:grid-rows-2 xl:grid-cols-3"
    >
      {/* my portfolio */}
      <div className="col-span-1 bg-[url('background-image.jpg')] bg-cover bg-center p-4 rounded-2xl mb-4 xl:mb-0 mr-2 bg-white/10 backdrop-blur-md border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <HiWallet className="text-gray-200 text-xl" />
          <p className="text-gray-200 text-xl">My Portfolio</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <p className="text-3xl">$23,569.00</p>
        </div>
        <div className="flex items-center mb-4 text-gray-200">
          <HiArrowSmallUp />
          <span>10.5% (+$908)</span>
        </div>

        <CrossLine size={"1"} borderDetail={"dashed"} color="gray-50" />

        <div className="grid grid-cols-[1fr_1fr_auto] gap-3">
          <DepositBtn />
          <WithdrawBtn />
          <MoreActionsBtn />
        </div>
      </div>

      {/* my assets */}
      <motion.div className="gap-3 border-2 border-gray-300 col-span-1 lg:col-span-2 p-4 rounded-2xl">
        <MyAssets />
      </motion.div>
    </motion.div>
  );
}

export default Home;
