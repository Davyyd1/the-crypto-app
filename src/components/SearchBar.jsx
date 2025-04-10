import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="border-2 border-gray-300 rounded-lg flex">
      <button className="p-2 cursor-pointer">
        <HiMagnifyingGlass />
      </button>
      <input
        type="text"
        name="search-btn"
        className="rounded-lg outline-0"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
