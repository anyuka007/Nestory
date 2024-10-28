import React from "react";
import { Link } from "react-router-dom";
import SearchItems from "../../components/SearchItem/SearchItems";

export const testSearchList = [
   
    {
        _id: 5678,
        name: "Sleeper sofa Cubic",
         price: 1299.00,
        description:
            "A magnis dui tincidunt erat egestas platea scelerisque dignissim luctus. Potenti quam proin ultrices elementum odio.",
       
        discount: 8,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic19-960x750.webp",
    },
    {
        _id: 9101,
        name: "Cosy RTV sofa",
        description:
            "Nunc aliquet ipsum eu dictumst quis natoque. Etiam scelerisque ipsum consequat lectus est ad aliquet diam fusce fermentum curabitur.",
        price: 1999,
        discount: 22,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic20-960x750.webp",
    },
    {
        _id: 5678,
        name: "Puffy sofa Orlando",
         price: 1670.00,
        description:
            "Malesuada consectetuer eros nulla euismod maecenas metus purus dignissim. Id magnis cras mauris tempor nisi nibh semper parturient erat fermentum.",
        discount: 8,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic21-960x750.webp",
    },
];
const SearchList = () => {
    return (
        <div className="w-full  mx-auto flex flex-col items-center justify-center ">
            <div className="w-full   justify-center ">
                <h1 className="text-[2.4rem] md:text-[4.2rem] font-bold text-colorPrimary p-5 mx-auto flex flex-col items-center justify-center" >3 results found for: sofa</h1>
            </div>
            {testSearchList.length ? (
                <div className="mx-auto flex flex-col items-center justify-center">
                    {/* <h3 className="text-[3.2rem] font-bold mb-[1.5rem]">
                        There are {testSearchList.length} items in your search list
                    </h3> */}
                    {testSearchList.map((item, index) => (
                        <SearchItems key={index} SearchItem={item} />
                    ))}
                </div>
            ) : (
                <div className="h-[80%] w-[80%] mx-auto flex flex-col items-center justify-center">
                    <h3 className="text-[3.2rem] font-bold mb-[1.5rem]">
                        Your Search Items List is empty
                    </h3>
                    <p className="bg-[#FFB128] py-[1.5rem] px-[3.5rem] text-[1.4rem] text-white  font-bold rounded-[8rem]">
                        <Link to={"/"}>Go Shopping</Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default SearchList;
