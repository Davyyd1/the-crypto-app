import { HiArrowSmallUp, HiFolderOpen } from "react-icons/hi2";

function MyAssets() {
  return (
    <>
      <div className="rounded-2xl flex gap-2">
        <HiFolderOpen className="text-gray-400 text-2xl" />
        <p className="text-gray-500 text-xl">My Asset</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {/* first asset */}
        <div className="grid grid-cols-2 border-2 border-gray-300">
          <div className="grid-rows-2 gap-2">
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
          <div className="">aici am graficul</div>
        </div>
        {/* second asset */}
        <div className="grid grid-cols-2 border-2 border-gray-300">
          <div className=" grid-rows-2 gap-2">
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
          <div className="">aici am graficul</div>
        </div>
      </div>
    </>
  );
}

export default MyAssets;
