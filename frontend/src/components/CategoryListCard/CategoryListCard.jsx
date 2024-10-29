/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryListCard = ({ title, img, className }) => (
    <div className={`bg-gray-100 rounded-3xl ${className}`}>
        <Link to={`/category/${title}`}>
            <img
                src={img}
                alt="hero-pic1"
                className="mx-auto w-[90%] h-[90%] object-cover rounded-3xl hover:scale-110 duration-300 ease-in-out"
            />
        </Link>
        <span className="text-3xl pl-6">{title}</span>
    </div>
);

export default CategoryListCard;
