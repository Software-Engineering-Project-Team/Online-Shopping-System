import { FaShoppingCart, FaSearch} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <>
      <div className="navbar bg-slate-50 flex justify-between items-center">
        <div className="flex-none">
          <a className="btn btn-ghost text-xl">
            <IconContext.Provider value={{ color: "#30C976" }}>
              <FaShoppingCart size={36} />
            </IconContext.Provider>
            Foodie
          </a>
        </div>
        <div className=" m-4">
          <input type="text" placeholder="Search Products..." className="input input-bordered w-full md:w-auto bg-[#30C976] rounded-none bg-opacity-10" />
          <a href="" className="btn btn-ghost bg-[#30C976] rounded-none bg-opacity-80">
            <IconContext.Provider value={{ color: "#fff" }}>
              <FaSearch size={24} />
            </IconContext.Provider>
          </a>
        </div>
        <div className="flex justify-between gap-x-4 w-full md:w-auto">
          <button tabIndex={0} className="btn btn-ghost rounded-none bg-[#30C976] text-xl text-white">
          Cart
            <IconContext.Provider value={{ color: "#fff" }}>
              <MdOutlineShoppingCart size={24} />
            </IconContext.Provider>
          </button>
          <button tabIndex={0} className="btn btn-ghost rounded-none bg-[#fff] text-xl text-black">Register</button>
          <button tabIndex={0} className="btn btn-ghost rounded-none bg-[#30C976] text-xl text-white">Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar