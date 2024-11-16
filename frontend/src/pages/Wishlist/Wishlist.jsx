import { useContext } from "react";
import { Link } from "react-router-dom";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import { AppContext } from "../../context/AppProvider";

const Wishlist = () => {
    const { wishlist, user } = useContext(AppContext);

    return (
        <div>
            <div className="py-[1rem] flex items-center justify-center">
                <h2 className="text-[3rem] md:text-[4rem]">Wishlist</h2>
            </div>
            {wishlist.length ? (
                <div className="flex flex-col items-center justify-center">
                    <h3 className=" w-[100%] lg:text-[2.5rem] text-center border-b">
                        {user.firstName}, there are {wishlist.length} items in
                        your wishlist
                    </h3>
                    {wishlist.map((item, index) => (
                        <WishlistItem key={index} wishItem={item} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h3 className="lg:text-[2.5rem] mb-[1.5rem]">
                        {user.firstName}, your wishlist is empty
                    </h3>
                    <p className="bg-[#FFB128] py-[1.5rem] px-[3.5rem] text-[1.4rem] text-white  font-bold rounded-[8rem]">
                        <Link to={"/shop"}>Go Shopping</Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
