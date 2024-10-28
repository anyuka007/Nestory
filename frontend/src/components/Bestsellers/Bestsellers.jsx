/* eslint-disable react/prop-types */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
        image: "/images/chairs/chair1.webp",
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

const Bestsellers = ({ cardWidth, visibleCards }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    // const [visibleCards, setVisibleCards] = useState(3); // 初始可见卡片数量
    // const cardWidth = 372;
    const gap = 30;

    const totalProducts = products.length;

    // const updateVisibleCards = () => {
    //     const width = window.innerWidth;
    //     if (width < 640) {
    //         setVisibleCards(1); // 小屏幕显示1张
    //     } else if (width < 1024) {
    //         setVisibleCards(2); // 中等屏幕显示2张
    //     } else {
    //         setVisibleCards(3); // 大屏幕显示3张
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("resize", updateVisibleCards);
    //     updateVisibleCards(); // 初始设置

    //     return () => {
    //         window.removeEventListener("resize", updateVisibleCards);
    //     };
    // }, []);

    const productsClone = [
        ...products.slice(-visibleCards),
        ...products,
        ...products.slice(0, visibleCards),
    ];

    const slideRef = useRef(null);

    const prevPageHandler = () => {
        if (!isButtonEnabled) return;
        setIsButtonEnabled(false);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const nextPageHandler = () => {
        if (!isButtonEnabled) return;
        setIsButtonEnabled(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    useLayoutEffect(() => {
        setIsTransitionEnabled(false);
        slideRef.current.style.transform = `translateX(-${
            currentIndex * (cardWidth + gap)
        }px)`;

        setTimeout(() => {
            setIsTransitionEnabled(true);
        }, 50);
    }, []);

    useEffect(() => {
        if (isTransitionEnabled) {
            slideRef.current.style.transition = "transform 0.3s ease-in-out";
        } else {
            slideRef.current.style.transition = "none";
        }

        slideRef.current.style.transform = `translateX(-${
            currentIndex * (cardWidth + gap)
        }px)`;

        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitionEnabled(false);
                setCurrentIndex(totalProducts);
            }, 300);
            setTimeout(() => {
                setIsTransitionEnabled(true);
            }, 350);
        } else if (currentIndex === productsClone.length - visibleCards) {
            setTimeout(() => {
                setIsTransitionEnabled(false);
                setCurrentIndex(visibleCards);
            }, 300);
            setTimeout(() => {
                setIsTransitionEnabled(true);
            }, 350);
        }

        const timeout = setTimeout(() => {
            setIsButtonEnabled(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, [currentIndex, isTransitionEnabled]);

    return (
        <div className="flex justify-center items-center my-10">
            <button
                className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-l"
                onClick={prevPageHandler}
                disabled={!isButtonEnabled}
            >
                Pre
            </button>
            <div
                className="overflow-hidden w-full flex-shrink-0"
                style={{
                    width: `${
                        cardWidth * visibleCards + gap * (visibleCards - 1)
                    }px`,
                }}
            >
                <div
                    ref={slideRef}
                    className="flex justify-between gap-12 w-full flex-shrink-0"
                    style={{
                        transform: `translateX(-${
                            currentIndex * (cardWidth + gap)
                        }px)`,
                    }}
                >
                    {productsClone.map((product, index) => (
                        <div
                            key={index}
                            className=" flex-shrink-0"
                            style={{ width: `${cardWidth}px` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 ml-1 rounded-r"
                onClick={nextPageHandler}
                disabled={!isButtonEnabled}
            >
                Nex
            </button>
        </div>
    );
};

export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import debounce from "lodash/debounce";

// const products = [
//     {
//         name: "Product Name",
//         image: "/images/beds/bed1.webp",
//         rate: 4.5,
//         percentage: "70%",
//         price: 560,
//     },
//     {
//         name: "Product Name",
//         image: "/images/sofas/sofa1.webp",
//         rate: 4.8,
//         percentage: "30%",
//         price: 1560,
//     },
//     {
//         name: "Product Name",
//         image: "/images/tables/table2.webp",
//         rate: 4.2,
//         percentage: "50%",
//         price: 360,
//     },
//     {
//         name: "Product Name",
//         image: "/images/chairs/chair1.webp",
//         rate: 4.9,
//         percentage: "10%",
//         price: 1060,
//     },
//     {
//         name: "Product Name",
//         image: "/images/deskes/desk1.webp",
//         rate: 4.9,
//         percentage: "10%",
//         price: 1060,
//     },
// ];

// const Bestsellers = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true);
//     const [visibleCards, setVisibleCards] = useState(3); // 默认显示 3 个卡片
//     const [cardWidth, setCardWidth] = useState(372);
//     const [gap, setGap] = useState(30);
//     // const cardWidth = 372;
//     //const gap = 30;
//     const totalProducts = products.length;

//     // // 设置可见卡片数量
//     // const updateVisibleCards = () => {
//     //     if (window.innerWidth >= 1280) {
//     //         setVisibleCards(3);
//     //         setCardWidth(372);
//     //     } else if (window.innerWidth >= 1024) {
//     //         setVisibleCards(3); // 大屏幕显示 3 张
//     //         setCardWidth(330);
//     //     } else if (window.innerWidth >= 768) {
//     //         setVisibleCards(2); // 中屏幕显示 2 张
//     //         setCardWidth(330);
//     //     } else {
//     //         setVisibleCards(1); // 小屏幕显示 1 张
//     //         setCardWidth(300);
//     //     }
//     // };

//     // useEffect(() => {
//     //     updateVisibleCards(); // 初次渲染时设置可见卡片数量
//     //     window.addEventListener("resize", updateVisibleCards); // 监听窗口大小变化

//     //     return () => {
//     //         window.removeEventListener("resize", updateVisibleCards); // 清理事件监听
//     //     };
//     // }, [visibleCards, cardWidth]);

//     // 使用 debounce 包裹 updateVisibleCards
//     const updateVisibleCards = debounce(() => {
//         if (window.innerWidth >= 1280) {
//             setVisibleCards(3);
//             setCardWidth(372);
//         } else if (window.innerWidth >= 1024) {
//             setVisibleCards(3);
//             setCardWidth(330);
//         } else if (window.innerWidth >= 768) {
//             setVisibleCards(2);
//             setCardWidth(330);
//         } else {
//             setVisibleCards(1);
//             setCardWidth(300);
//         }
//     }, 100); // 延迟 100 毫秒

//     useEffect(() => {
//         updateVisibleCards(); // 初次渲染时调用
//         window.addEventListener("resize", updateVisibleCards); // 监听 resize

//         return () => window.removeEventListener("resize", updateVisibleCards); // 清理监听器
//     }, []);

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards),
//         ...products,
//         ...products.slice(0, visibleCards),
//     ];

//     const slideRef = useRef(null);

//     const prevPageHandler = () => {
//         if (!isButtonEnabled) return;
//         setIsButtonEnabled(false);
//         setCurrentIndex((prevIndex) => prevIndex - 1);
//     };

//     const nextPageHandler = () => {
//         if (!isButtonEnabled) return;
//         setIsButtonEnabled(false);
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//     };

//     useLayoutEffect(() => {
//         setIsTransitionEnabled(false);
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         setTimeout(() => {
//             setIsTransitionEnabled(true);
//         }, 50);
//     }, []);

//     useEffect(() => {
//         if (isTransitionEnabled) {
//             slideRef.current.style.transition = "transform 0.3s ease-in-out";
//         } else {
//             slideRef.current.style.transition = "none";
//         }

//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 边界检测和跳转
//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(totalProducts);
//             }, 300);
//             setTimeout(() => {
//                 setIsTransitionEnabled(true);
//             }, 350);
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(visibleCards);
//             }, 300);
//             setTimeout(() => {
//                 setIsTransitionEnabled(true);
//             }, 350);
//         }

//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true);
//         }, 300);

//         return () => clearTimeout(timeout);
//     }, [currentIndex, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{
//                     width: `${
//                         cardWidth * visibleCards + gap * (visibleCards - 1)
//                     }px`,
//                 }}
//             >
//                 <div ref={slideRef} className="flex justify-between gap-12">
//                     {productsClone.map((product, index) => (
//                         <div
//                             key={index}
//                             className=" flex-shrink-0"
//                             style={{ width: `${cardWidth}px` }}
//                         >
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 ml-2 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Bestsellers;
