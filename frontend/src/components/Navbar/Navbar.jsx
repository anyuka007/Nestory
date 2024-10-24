import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgMenu from "../HamburgMenu/HamburgMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import "../../css/App.css";

const Navbar = () => {
    return (
        <div className="px-10 md:px-20 lg:px-40 xl:px-80 w-full h-[11rem] flex flex-col bg-white fixed z-20 shadow-sm shadow-gray-200">
            <div className="h-[60%] flex justify-between w-full">
                {/* MOBILE */}
                <div className="w-full flex justify-between items-center md:hidden">
                    <div>
                        <Link to={"/"}>neSTory</Link>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <HamburgMenu />
                        <Link to={"/search"}>
                            <Search />
                        </Link>
                    </div>
                </div>
                {/* TABLET */}
                <div className="hidden md:flex justify-between items-center w-full">
                    {/* LEFT */}
                    <div className="w-2/3 flex justify-between items-center">
                        <div>
                            <Link to={"/"}>neSTory</Link>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className=" bg-slate-100 rounded-md px-2 py-1 lg:w-[40rem] xl:w-[62rem] h-[4rem] focus:outline-none"
                            />
                            <Link to={"/search"}>
                                <Search />
                            </Link>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 flex justify-end items-center gap-16">
                        <div className="relative">
                            <Link to={"/cart"}>
                                <span className="number">0</span>
                                <ShoppingBag size={26} />
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to={"/wishlist"}>
                                <span className="number">3</span>
                                <Heart size={26} />
                            </Link>
                        </div>
                        <div>
                            <Link to={"/login"}>
                                <User size={26} />
                            </Link>
                        </div>
                        <HamburgMenu className="xl:hidden" />
                    </div>
                </div>
            </div>

            <div className="hidden h-[40%] xl:flex  w-full">
                {/* <Link to={"category/:categoryName"}>Category</Link> */}
                <CategoryMenu />
            </div>
        </div>
    );
};

export default Navbar;
