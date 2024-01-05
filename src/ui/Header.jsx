import { Link } from "react-router-dom";
import Username from "../features/user/Username";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3  uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Reack Pizza CO.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
