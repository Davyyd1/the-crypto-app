import { HiCurrencyDollar } from "react-icons/hi2";

function DepositBtn() {
  return (
    <button className="flex items-center justify-center col-span-1 py-4 bg-white/30 border-white/30 backdrop-blur-3xl rounded-xl cursor-pointer gap-1 hover:bg-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300">
      <HiCurrencyDollar className="text-white text-2xl" />
      <p className="text-white">Deposit</p>
    </button>
  );
}

export default DepositBtn;
