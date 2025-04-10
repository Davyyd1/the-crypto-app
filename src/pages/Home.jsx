import { NavLink } from "react-router";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import {
  HiArrowSmallUp,
  HiBell,
  HiCog6Tooth,
  HiFolderOpen,
  HiWallet,
} from "react-icons/hi2";
import CrossLine from "../components/CrossLine";
import DepositBtn from "../components/DepositBtn";
import WithdrawBtn from "../components/WithdrawBtn";
import MoreActionsBtn from "../components/MoreActionsBtn";

function Home() {
  return (
    <div className="flex h-screen">
      <aside className="hidden flex-col h-screen md:flex md:w-64 lg:w-84 border-r-[3px] border-gray-100 p-4 overflow-y-auto">
        <div className="flex flex-col flex-grow">
          <NavLink to="/" className="flex items-center">
            <img src="./logo.png" alt="img" />
            <p className="text-3xl font-bold px-2">Coinex.</p>
          </NavLink>
          <CrossLine borderDetail={"dotted"} />
          <SearchBar />
          <Navbar />
        </div>
        <div className="flex flex-col text-xl">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 p-2 rounded bg-gray-100 flex items-center"
                : "text-gray-500 p-2 rounded hover:bg-gray-100 flex items-center"
            }
          >
            <HiCog6Tooth />
            <span className="px-2">Settings</span>
          </NavLink>
        </div>
      </aside>

      <main className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col flex-grow">
          <div className="flex gap-2 items-center">
            <p className="text-3xl font-bold ">Dashboard</p>
            <div className="flex flex-1 justify-end items-center gap-2">
              <HiBell className="text-3xl outline-1 rounded-full p-1 outline-gray-400 text-gray-500" />
              <img src="./user.png" alt="User" className="h-[2.5rem]" />
            </div>
          </div>
          <CrossLine borderDetail={"solid"} />
        </div>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 md:grid-rows-0">
          <div className="col-span-1 bg-[url('background-image.jpg')] p-4 rounded-2xl">
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

          <div className="gap-3 border-2 col-span-1 p-4 rounded-2xl">
            <div className="rounded-2xl flex gap-2">
              <HiFolderOpen className="text-gray-400 text-2xl" />
              <p className="text-gray-500 text-xl">My Asset</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="grid grid-cols-2 border-2">
                <div className="border-2 grid-rows-2 gap-2">
                  <div className="flex">
                    <p className="flex items-center">SIGN</p>
                    <div className="flex flex-col">
                      <span>BTC</span>
                      <span>Bitcoin</span>
                    </div>
                  </div>
                  <div className="pt-2 font-bold">$1,523.00</div>
                  <div className="flex items-center py-2">
                    <HiArrowSmallUp />
                    <span className="flex items-center">10.5% (+$908)</span>
                  </div>
                </div>
                <div className="border-2">aici am graficul</div>
              </div>
              <div className="border-2">y</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

{
  /* <div className="flex">
          <h2 className="text-xl font-bold flex items-center">Dashboard</h2>
          <div className="flex flex-1 justify-end items-center gap-2  ">
            <p>Notifications</p>
            <img src="./user.png" alt="User" className="h-[3rem]" />
          </div>
        </div>
        <p className="border-b-2 border-dotted mt-4 mb-4"></p>
        <p>continut </p> */
}
