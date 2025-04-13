function SelectableBtn({ isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded transition-colors duration-200 px-2 ${
        isActive ? "bg-white" : " hover:bg-white hover:text-black text-gray-400"
      }`}
    >
      {children}
    </button>
  );
}

export default SelectableBtn;
