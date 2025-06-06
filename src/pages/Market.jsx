import { HiBarsArrowUp, HiBeaker } from "react-icons/hi2";
import SearchBar from "../components/SearchBar";
import { AnimatePresence, motion } from "motion/react";
import { useLocation, useParams } from "react-router";

function Market() {
  // const { data } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUser,
  // });

  const fancyBg = "bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#0f172a]";
  const borderGlow = "border border-indigo-500/30 shadow-[0_0_10px_#6366f1aa]";

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`border-2 border-gray-200 rounded-lg p-2 ${fancyBg} ${borderGlow}`}
    >
      <div className="flex items-center">
        <div className="flex items-center gap-1 text-white">
          <span className="border-2 border-gray-300 rounded-lg p-1">
            <HiBarsArrowUp />
          </span>
          <p>Market</p>
        </div>
        <div className="flex flex-1 justify-end items-center gap-2">
          <SearchBar />
          <div className="border-2 border-gray-300 rounded-lg p-2 text-white">
            <HiBeaker />
          </div>
        </div>
      </div>
      <p className="border-b-2 border-solid border-gray-200 mt-[1.25rem]"></p>

      <div className="w-full overflow-x-auto border-2 border-gray-300 rounded-xl shadow-sm mt-2">
        <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Coin</th>
              <th className="px-4 py-3 text-left font-semibold">Last Price</th>
              <th className="px-4 py-3 text-left font-semibold">24h</th>
              <th className="px-4 py-3 text-left font-semibold">7d</th>
              <th className="px-4 py-3 text-left font-semibold">Market Cap</th>
              <th className="px-4 py-3 text-left font-semibold"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-gray-100 text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">BTC Bitcoin</td>
              <td className="px-4 py-3 whitespace-nowrap">$59,101.98</td>
              <td className="px-4 py-3 text-green-600">1.16%</td>
              <td className="px-4 py-3 text-green-600">2.46%</td>
              <td className="px-4 py-3 whitespace-nowrap">$1.17T</td>
              <td className="px-4 py-3 text-blue-600 font-medium">
                Buy the dip!
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">BTC Bitcoin</td>
              <td className="px-4 py-3 whitespace-nowrap">$59,101.98</td>
              <td className="px-4 py-3 text-green-600">1.16%</td>
              <td className="px-4 py-3 text-green-600">2.46%</td>
              <td className="px-4 py-3 whitespace-nowrap">$1.17T</td>
              <td className="px-4 py-3 text-blue-600 font-medium">
                Buy the dip!
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">BTC Bitcoin</td>
              <td className="px-4 py-3 whitespace-nowrap">$59,101.98</td>
              <td className="px-4 py-3 text-green-600">1.16%</td>
              <td className="px-4 py-3 text-green-600">2.46%</td>
              <td className="px-4 py-3 whitespace-nowrap">$1.17T</td>
              <td className="px-4 py-3 text-blue-600 font-medium">
                Buy the dip!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Market;
