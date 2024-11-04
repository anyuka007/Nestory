import { Armchair, BedDouble, Sofa } from "lucide-react";
import { MdTableRestaurant } from "react-icons/md";
import { TbDesk } from "react-icons/tb";
import { Link } from "react-router-dom";

const CategoryMenu = ({ categoryName }) => {
    const categories = ["Sofas", "Chairs", "Tables", "Beds", "Desks"];
    const categoriesIcon = [
        <Sofa size={32} />,
        <Armchair size={32} />,
        <MdTableRestaurant size={32} />,
        <BedDouble size={32} />,
        <TbDesk size={32} />,
    ];
    return (
        <div className="flex  justify-evenly items-center  mt-5 w-full ">
            {categories.map((category, index) => (
                <Link
                    key={category}
                    className="flex  items-center gap-2"
                    to={`/category/${category}`}
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    {categoriesIcon[index]}
                    <span className="text-3xl">{category}</span>
                </Link>
            ))}
        </div>
    );
};

export default CategoryMenu;
