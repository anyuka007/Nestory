import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
const products = [
    {
        name: "Product Name",
        image: "/images/beds/bed1.webp",
        rate: 4.5,
        percentage: "70%",
        price: 560,
    },
    {
        name: "Product Name",
        image: "/images/sofas/sofa1.webp",
        rate: 4.8,
        percentage: "30%",
        price: 1560,
    },
    {
        name: "Product Name",
        image: "/images/tables/table2.webp",
        rate: 4.2,
        percentage: "50%",
        price: 360,
    },
    {
        name: "Product Name",
        image: "/images/deskes/desk1.webp",
        rate: 4.9,
        percentage: "10%",
        price: 1060,
    },
    {
        name: "Product Name",
        image: "/images/deskes/desk1.webp",
        rate: 4.9,
        percentage: "10%",
        price: 1060,
    },
    {
        name: "Product Name",
        image: "/images/deskes/desk1.webp",
        rate: 4.9,
        percentage: "10%",
        price: 1060,
    },
    {
        name: "Product Name",
        image: "/images/deskes/desk1.webp",
        rate: 4.9,
        percentage: "10%",
        price: 1060,
    },
];

const Bestsellers = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // 从第1个索引开始
    const cardWidth = 372; // 每个卡片的宽度
    const gap = 30; // 卡片之间的间隔
    const visibleCards = 3; // 每页显示 3 个卡片
    const totalProducts = products.length;

    const productsClone = [
        products[totalProducts - 1],
        ...products,
        products[0],
    ]; // 克隆首尾的元素
    const slideRef = useRef(null); // 引入ref来手动操作DOM

    // const prevPageHandler = () => {
    //     setCurrentIndex((prevIndex) => {
    //         // 保持总是显示3张卡片
    //         return prevIndex === 1 ? productsClone.length - 2 : prevIndex - 1;
    //     });
    // };

    // const nextPageHandler = () => {
    //     setCurrentIndex((prevIndex) => {
    //         // 保持总是显示3张卡片
    //         return prevIndex === productsClone.length - 2 ? 1 : prevIndex + 1;
    //     });
    // };

    // // useEffect(() => {
    // //     // 手动点击时，如果到达第一个或最后一个克隆元素，瞬间调整位置
    // //     if (currentIndex === 0) {
    // //         slideRef.current.style.transition = "none"; // 关闭动画
    // //         setCurrentIndex(totalProducts); // 跳转到最后一个真实元素
    // //     } else if (currentIndex === clonedProducts.length - 1) {
    // //         slideRef.current.style.transition = "none"; // 关闭动画
    // //         setCurrentIndex(1); // 跳转到第一个真实元素
    // //     }
    // // }, [currentIndex, totalProducts, clonedProducts.length]);

    const prevPageHandler = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 1) {
                return totalProducts; // 跳到真实最后一张
            }
            return prevIndex - 1; // 否则往前移动
        });
    };

    const nextPageHandler = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === totalProducts) {
                return 1; // 跳到真实第一张
            }
            return prevIndex + 1; // 否则往后移动
        });
    };

    useEffect(() => {
        slideRef.current.style.transition = "transform 0.3s ease-in-out"; // 设定过渡动画
        slideRef.current.style.transform = `translateX(-${
            currentIndex * (cardWidth + gap)
        }px)`; // 计算当前偏移
    }, [currentIndex]);

    // useEffect(() => {
    //     slideRef.current.style.transition = "transform 0.3s ease-in-out"; // 设定过渡动画
    //     if (currentIndex === 0) {
    //         slideRef.current.style.transform = `translateX(-${
    //             totalProducts * (cardWidth + gap)
    //         }px)`; // 跳转到最后一个
    //         setCurrentIndex(totalProducts); // 重新设置为真实最后一张
    //     } else if (currentIndex === totalProducts + 1) {
    //         slideRef.current.style.transform = `translateX(-${
    //             1 * (cardWidth + gap)
    //         }px)`; // 跳转到第一个
    //         setCurrentIndex(1); // 重新设置为真实第一张
    //     }
    // }, [currentIndex, totalProducts]);

    return (
        <div className="flex justify-center items-center my-10">
            <button
                className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                onClick={prevPageHandler}
            >
                Pre
            </button>
            <div
                className="overflow-hidden"
                style={{
                    width: `${
                        cardWidth * visibleCards + gap * (visibleCards - 1)
                    }px`, // 容器宽度：3个卡片 + 2个间隔
                }}
            >
                {/* {" "} */}
                {/* 外层容器控制宽度 */}
                <div
                    ref={slideRef}
                    className="flex justify-between  transition-transform duration-300 ease-in-out gap-12"
                    style={{
                        transform: `translateX(-${
                            currentIndex * (cardWidth + gap)
                        }px)`, // 根据卡片宽度和间隔来滑动
                        // transform: `translateX(-${
                        //     (currentIndex * 100) / iconsPerPage
                        // }%)`,
                    }}
                >
                    {productsClone.map((product, index) => (
                        <div key={index} className="w-[372px] flex-shrink-0">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={nextPageHandler}
            >
                Next
            </button>
        </div>
    );
};

// const Bestsellers = () => {
//     return (
//         <div className="mt-80 ">
//             <h2 className="mb-40 text-[4rem] font-bold text-center">
//                 HOT DEALS
//             </h2>
//             <div className="flex gap-10 ">
//                 {products.map((product, index) => (
//                     <ProductCard key={index} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Bestsellers;

// Bestsellers 组件
// const Bestsellers = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const iconsPerPage = 3; // 每页显示 3 个卡片
//     // const totalPages = Math.ceil(products.length / iconsPerPage);
//     const totalProducts = products.length;

//     const prevPageHandler = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? totalProducts - 1 : prevIndex - 1
//         );
//     };

//     const nextPageHandler = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === totalProducts - 1 ? 0 : prevIndex + 1
//         );
//     };

//     // 根据 currentIndex 动态获取当前显示的3个卡片
//     const getCurrentProducts = () => {
//         let startIndex = currentIndex;
//         let endIndex = (currentIndex + iconsPerPage) % totalProducts;

//         if (endIndex > startIndex) {
//             return products.slice(startIndex, endIndex);
//         } else {
//             // 循环回到开头的情况
//             return [
//                 ...products.slice(startIndex),
//                 ...products.slice(0, endIndex),
//             ];
//         }
//     };

//     return (
//         <div className="flex justify-center items-center my-10">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//             >
//                 Pre
//             </button>
//             <div className="slide-tabs overflow-hidden w-full flex justify-center">
//                 <div
//                     className="flex gap-8 transition-transform duration-300 ease-in-out"
//                     style={{
//                         transform: `translateX(-${
//                             (currentIndex % iconsPerPage) * 100
//                         }%)`,
//                     }}
//                 >
//                     {getCurrentProducts().map((product, index) => (
//                         <div
//                             key={index}
//                             className="tab-container w-[300px] flex-shrink-0"
//                         >
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//                 onClick={nextPageHandler}
//             >
//                 Next
//             </button>
//         </div>
//     );

// return (
//     <div className="flex justify-center items-center my-10">
//         <button
//             className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//             onClick={prevPageHandler}
//         >
//             Pre
//         </button>
//         <div
//             className="slide-tabs flex overflow-hidden w-full justify-center"
//             style={{
//                 transition: "transform 0.3s ease-in-out",
//                 transform: `translateX(-${
//                     (currentIndex * 100) / iconsPerPage
//                 }%)`, // 每次只移动一个卡片的宽度
//             }}
//         >
//             <div className="flex justify-center items-center gap-8 w-[300%]">
//                 {/* 显示 3 个卡片 */}
//                 {products.slice(0, iconsPerPage).map((product, index) => (
//                     <div
//                         key={index}
//                         className="tab-container w-1/3 flex-shrink-0"
//                     >
//                         <ProductCard product={product} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//         <button
//             className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//             onClick={nextPageHandler}
//         >
//             Next
//         </button>
//     </div>

// <div className="flex justify-center items-center">
//     <div className="flex justify-center items-center">
//         <button className="prev" onClick={prevPageHandler}>
//             Pre
//         </button>

//         {/* <div
//             className="slide-tabs"
//             style={{ transform: `translateX(-${currentPage * 100}%)` }}
//         >
//             <div className="flex justify-center items-center gap-8">

//                 {products
//                     .slice(
//                         currentPage * iconsPerPage,
//                         (currentPage + 1) * iconsPerPage
//                     )
//                     .map((product, index) => (
//                         <div key={index} className="tab-container">
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//             </div>
//         </div> */}

//         <div
//             className="slide-tabs"
//             style={{
//                 display: "flex",
//                 transition: "transform 0.3s ease-in-out",
//                 transform: `translateX(-${
//                     (currentIndex * 100) / iconsPerPage
//                 }%)`, // 每次只移动一个卡片的宽度
//             }}
//         >
//             <div className="flex justify-center items-center gap-8 overflow-x-hidden">
//                 {/* 显示 3 个卡片 */}
//                 {products
//                     .slice(0, iconsPerPage)
//                     .map((product, index) => (
//                         <div key={index} className="tab-container">
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//         <button className="next" onClick={nextPageHandler}>
//             Next
//         </button>
//     </div>
// </div>
// );
// };

export default Bestsellers;
