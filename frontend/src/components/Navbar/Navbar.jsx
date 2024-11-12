import {
    Heart,
    LayoutGrid,
    LogOut,
    Search,
    ShoppingBag,
    User,
    X,
} from "lucide-react";
import { Link } from "react-router-dom";
import HamburgMenu from "../HamburgMenu/HamburgMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import "../../css/App.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";

const Navbar = () => {
    const [search, setSearch] = useState(false);
    //julijana : handleLogout hinzugefügt
    const {
        loginSuccess,
        searchKeyword,
        setSearchKeyword,
        wishlist,
        cartItems,
        bagIconRef,
        handleLogout,
        user,
    } = useContext(AppContext);
    const [clickUser, setClickUser] = useState(false);

    console.log("cartItems in navbar", cartItems);

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value);
        console.log("searchKeyword", searchKeyword);
    };

    return (
        <div className="px-20 md:px-20 lg:px-40 xl:px-80 w-full h-[6rem] xl:h-[14rem] flex flex-col bg-white fixed z-20 shadow-sm shadow-gray-200  ">
            <div className="h-full xl:h-[50%] flex justify-between w-full ">
                {/* MOBILE */}

                <div className="w-full flex justify-between items-center md:hidden relative">
                    <div>
                        <Link
                            to={"/"}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            neSTory
                        </Link>
                    </div>
                    <div className="flex justify-between items-center gap-2 ">
                        <HamburgMenu />
                        {!search && (
                            <Search onClick={() => setSearch(!search)} />
                        )}
                    </div>
                    {search && (
                        <div className="w-full flex absolute top-28 left-0 justify-center items-center gap-2 z-10 bg-white">
                            <input
                                type="text"
                                placeholder="Search"
                                className=" bg-slate-100 rounded-md w-[80%]  h-[4rem] focus:outline-none relative"
                            />
                            <Link
                                className="absolute right-[7rem]"
                                to={"/search"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <Search />
                            </Link>
                            <X
                                onClick={() => setSearch(!search)}
                                className="cursor-pointer transition-transform duration-300
                  ease-in-out transform hover:rotate-180 text-gray-400
                  hover:text-gray-900"
                            />
                        </div>
                    )}
                </div>
                <div className="w-full flex justify-around items-center md:hidden fixed bottom-0 left-0 z-20 h-[8rem] bg-white shadow-sm shadow-gray-200">
                    <div>
                        <Link
                            to={"/shop"}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <LayoutGrid size={26} />
                        </Link>
                    </div>

                    <div ref={bagIconRef} className="relative">
                        <Link
                            to={user._id ? "/cart" : "/login"}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            {user._id && (
                                <span className="number">
                                    {/* {cartCount} */}
                                    {cartItems.length}
                                </span>
                            )}
                            {/* <span className="number">{cartCount}</span> */}
                            <ShoppingBag size={26} />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link
                            to={user._id ? "/wishlist" : "/login"}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            {user._id && (
                                <span className="number">
                                    {wishlist.length}
                                </span>
                            )}
                            <Heart size={26} />
                        </Link>
                    </div>
                    <div>
                        {loginSuccess ? (
                            <div>
                                <div onClick={() => setClickUser(!clickUser)}>
                                    <User />
                                </div>
                                {clickUser && (
                                    <div className="absolute  top-16 right-[-5rem] w-max flex flex-col items-center justify-center  border-gray-200 bg-white">
                                        <Link
                                            to={"/user"}
                                            onClick={() => {
                                                setClickUser(false);
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setClickUser(false);
                                            }}
                                        >
                                            <div className="flex gap-2 mt-6 w-fit">
                                                <span>Log out</span>
                                                <LogOut />
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to={"/login"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <User size={26} />
                            </Link>
                        )}
                    </div>
                </div>
                {/* TABLET */}
                <div className="hidden md:flex justify-between items-center w-full gap-10">
                    {/* LEFT */}
                    <div className="w-2/3 flex justify-between items-center lg:gap-8">
                        <div>
                            <Link
                                to={"/"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                neSTory
                            </Link>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <input
                                onChange={handleSearch}
                                value={searchKeyword}
                                type="text"
                                placeholder="Search"
                                className=" bg-slate-100 rounded-md px-2 py-1 md:w-[30rem] lg:w-[40rem] xl:w-[58rem] h-[4rem] focus:outline-none"
                            />

                            <Link
                                to={"/search"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <Search />
                            </Link>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 flex justify-end items-center gap-16">
                        <div ref={bagIconRef} className="relative">
                            <Link
                                to={user._id ? "/cart" : "/login"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {user._id && (
                                    <span className="number">
                                        {cartItems.length}
                                    </span>
                                )}
                                <ShoppingBag size={26} />
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                to={user._id ? "/wishlist" : "/login"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {user._id && (
                                    <span className="number">
                                        {wishlist.length}
                                    </span>
                                )}
                                <Heart size={26} />
                            </Link>
                        </div>
                        <div>
                            {loginSuccess ? (
                                <div className="relative cursor-pointer ">
                                    <div
                                        onClick={() => setClickUser(!clickUser)}
                                    >
                                        <User />
                                    </div>
                                    {clickUser && (
                                        <div className="absolute flex flex-col top-16 right-[-5rem] w-max p-4 border-gray-200 bg-white ">
                                            <Link
                                                to={"/user"}
                                                onClick={() => {
                                                    setClickUser(false);
                                                    window.scrollTo(0, 0);
                                                }}
                                            >
                                                Profile
                                            </Link>
                                            {/* julijana: button + onClick */}
                                            <button
                                                onClick={() => {
                                                    handleLogout();
                                                    setClickUser(false);
                                                }}
                                            >
                                                <div className="flex gap-2 mt-6 w-fit">
                                                    <span>Log out</span>
                                                    <LogOut />
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={"/login"}
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <User size={26} />
                                </Link>
                            )}
                        </div>
                        <HamburgMenu className="xl:hidden" />
                    </div>
                </div>
            </div>

            <div className="hidden xl:h-[50%] xl:flex  w-full">
                <CategoryMenu />
            </div>
        </div>
    );
};

export default Navbar;
