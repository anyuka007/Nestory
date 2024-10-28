// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
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
//     const [currentIndex, setCurrentIndex] = useState(1); // 从第1个索引开始
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false); // 初始禁用动画
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true); // 控制按钮是否可点击
//     const cardWidth = 372; // 每个卡片的宽度
//     const gap = 30; // 卡片之间的间隔
//     const visibleCards = 3; // 每页显示 3 个卡片
//     const totalProducts = products.length;

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards), // 克隆最后几张到最前面
//         ...products,
//         ...products.slice(0, visibleCards), // 克隆最前几张到最后面
//     ];
//     const slideRef = useRef(null); // 引入ref来手动操作DOM

//     const prevPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => {
//             if (prevIndex === 0) {
//                 return totalProducts; // 跳到真实最后一组
//             }
//             return prevIndex - 1; // 否则往前移动
//         });
//     };

//     const nextPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => {
//             if (prevIndex === productsClone.length - visibleCards) {
//                 return visibleCards; // 跳到真实第一组
//             }
//             return prevIndex + 1; // 否则往后移动
//         });
//     };

//     useLayoutEffect(() => {
//         // 确保初始加载时没有跳动
//         setIsTransitionEnabled(false); // 禁用动画
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 等待页面渲染完成后再开启动画效果
//         setTimeout(() => {
//             setIsTransitionEnabled(true); // 启用动画
//         }, 50);
//     }, []);

//     useEffect(() => {
//         // 设置滑动动画
//         slideRef.current.style.transition = isTransitionEnabled
//             ? "transform 0.3s ease-in-out"
//             : "none"; // 根据是否启用动画设置transition
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 边界检测和跳转
//         if (currentIndex === 0) {
//             // 到达克隆的第一个时，瞬间跳转到真实的最后一组
//             setTimeout(() => {
//                 slideRef.current.style.transition = "none"; // 关闭动画
//                 setCurrentIndex(totalProducts); // 跳转到真实最后一个
//             }, 300); // 动画结束后再跳转
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             // 到达克隆的最后一组时，瞬间跳回到真实的第一组
//             setTimeout(() => {
//                 slideRef.current.style.transition = "none"; // 关闭动画
//                 setCurrentIndex(visibleCards); // 跳回真实第一组
//             }, 300); // 动画结束后再跳转
//         }

//         // 动画结束后启用按钮
//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true); // 启用按钮
//         }, 300); // 动画时间为0.3s

//         return () => clearTimeout(timeout); // 清理超时
//     }, [currentIndex, totalProducts, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{
//                     width: `${
//                         cardWidth * visibleCards + gap * (visibleCards - 1)
//                     }px`, // 容器宽度：3个卡片 + 2个间隔
//                 }}
//             >
//                 {/* 外层容器控制宽度 */}
//                 <div
//                     ref={slideRef}
//                     className="flex justify-between gap-12"
//                     style={{
//                         transform: `translateX(-${
//                             currentIndex * (cardWidth + gap)
//                         }px)`, // 根据卡片宽度和间隔来滑动
//                     }}
//                 >
//                     {productsClone.map((product, index) => (
//                         <div key={index} className="w-[372px] flex-shrink-0">
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { ChevronRight } from "lucide-react";

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
//     const [currentIndex, setCurrentIndex] = useState(1); // 从第1个索引开始
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false); // 初始禁用动画
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true); // 控制按钮是否可点击
//     const cardWidth = 372; // 每个卡片的宽度
//     const gap = 20; // 卡片之间的间隔
//     const visibleCards = 3; // 每页显示 3 个卡片
//     const totalProducts = products.length;

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards), // 克隆最后几张到最前面
//         ...products,
//         ...products.slice(0, visibleCards), // 克隆最前几张到最后面
//     ];
//     const slideRef = useRef(null); // 引入ref来手动操作DOM

//     const prevPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => prevIndex - 1); // 往前移动
//     };

//     const nextPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => prevIndex + 1); // 往后移动
//     };

//     useLayoutEffect(() => {
//         // 确保初始加载时没有跳动
//         setIsTransitionEnabled(false); // 禁用动画
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 等待页面渲染完成后再开启动画效果
//         setTimeout(() => {
//             setIsTransitionEnabled(true); // 启用动画
//         }, 50);
//     }, []);

//     useEffect(() => {
//         if (isTransitionEnabled) {
//             slideRef.current.style.transition = "transform 0.3s ease-in-out"; // 设置滑动动画
//         } else {
//             slideRef.current.style.transition = "none"; // 禁用动画
//         }

//         // 设置滑动位置
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 边界检测和跳转
//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false); // 禁用动画
//                 setCurrentIndex(totalProducts); // 瞬间跳转到最后一组
//             }, 300); // 动画结束后再跳转
//             setTimeout(() => {
//                 setIsTransitionEnabled(true); // 重新启用动画
//             }, 350); // 确保跳转完成后启用动画
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false); // 禁用动画
//                 setCurrentIndex(visibleCards); // 瞬间跳回第一组
//             }, 300); // 动画结束后再跳转
//             setTimeout(() => {
//                 setIsTransitionEnabled(true); // 重新启用动画
//             }, 350); // 确保跳转完成后启用动画
//         }

//         // 启用按钮
//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true); // 启用按钮
//         }, 300); // 动画时间为0.3s

//         return () => clearTimeout(timeout); // 清理超时
//     }, [currentIndex, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{
//                     width: `${
//                         cardWidth * visibleCards + gap * (visibleCards - 1)
//                     }px`, // 容器宽度：3个卡片 + 2个间隔
//                 }}
//             >
//                 {/* 外层容器控制宽度 */}
//                 <div
//                     ref={slideRef}
//                     className="flex justify-between gap-8"
//                     style={{
//                         transform: `translateX(-${
//                             currentIndex * (cardWidth + gap)
//                         }px)`, // 根据卡片宽度和间隔来滑动
//                     }}
//                 >
//                     {productsClone.map((product, index) => (
//                         <div key={index} className="w-[372px] flex-shrink-0">
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div
//                 className="w-14 h-14 rounded-full bg-colorPrimary cursor-pointer"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 <ChevronRight />
//             </div>
//             {/* <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Next
//             </button> */}
//         </div>
//     );
// };

// export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { ChevronRight } from "lucide-react";

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
//     const [currentIndex, setCurrentIndex] = useState(1); // 从第1个索引开始
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false); // 初始禁用动画
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true); // 控制按钮是否可点击
//     // const [visibleCards, setVisibleCards] = useState(1); // 默认值为1
//     const cardWidthXL = 372; // 每个卡片的宽度
//     const cardWidthLG = 300; // 每个卡片的宽度
//     const cardWidthMD = 250; // 每个卡片的宽度
//     const cardWidthSM = 200; // 每个卡片的宽度
//     const [visibleCards, setVisibleCards] = useState(3);
//     const gap = 20; // 卡片之间的间隔
//     // const visibleCards = 3; // 每页显示 3 个卡片
//     const totalProducts = products.length;
//     let currentCardWidth = 0;
//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards), // 克隆最后几张到最前面
//         ...products,
//         ...products.slice(0, visibleCards), // 克隆最前几张到最后面
//     ];
//     const slideRef = useRef(null); // 引入ref来手动操作DOM

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setVisibleCards(1); // mobile
//                 currentCardWidth = cardWidthSM;
//             } else if (window.innerWidth < 1024) {
//                 setVisibleCards(2); // tablet
//                 currentCardWidth = cardWidthMD;
//             } else {
//                 setVisibleCards(3); // computer
//                 currentCardWidth = cardWidthLG;
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         handleResize(); // 初始化调用一次

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const prevPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => prevIndex - 1); // 往前移动
//     };

//     const nextPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => prevIndex + 1); // 往后移动
//     };

//     useLayoutEffect(() => {
//         if (!slideRef.current) return; // 确保 slideRef.current 已渲染

//         // const calculateCardWidth = () => {
//         //     // 计算每张卡片的宽度，考虑到 `visibleCards` 的数量
//         //     return slideRef.current.clientWidth / visibleCards - gap;
//         // };
//         // 确保初始加载时没有跳动
//         setIsTransitionEnabled(false); // 禁用动画
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (currentCardWidth + gap)
//         }px)`;

//         // 等待页面渲染完成后再开启动画效果
//         setTimeout(() => {
//             setIsTransitionEnabled(true); // 启用动画
//         }, 50);
//     }, [currentIndex, visibleCards]);

//     useEffect(() => {
//         if (isTransitionEnabled) {
//             slideRef.current.style.transition = "transform 0.3s ease-in-out"; // 设置滑动动画
//         } else {
//             slideRef.current.style.transition = "none"; // 禁用动画
//         }

//         // // 设置滑动位置
//         // slideRef.current.style.transform = `translateX(-${
//         //     currentIndex * (cardWidth + gap)
//         // }px)`;
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (slideRef.current.clientWidth / visibleCards + gap)
//         }px)`;

//         // 边界检测和跳转
//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false); // 禁用动画
//                 setCurrentIndex(totalProducts); // 瞬间跳转到最后一组
//             }, 300); // 动画结束后再跳转
//             setTimeout(() => {
//                 setIsTransitionEnabled(true); // 重新启用动画
//             }, 350); // 确保跳转完成后启用动画
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false); // 禁用动画
//                 setCurrentIndex(visibleCards); // 瞬间跳回第一组
//             }, 300); // 动画结束后再跳转
//             setTimeout(() => {
//                 setIsTransitionEnabled(true); // 重新启用动画
//             }, 350); // 确保跳转完成后启用动画
//         }

//         // 启用按钮
//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true); // 启用按钮
//         }, 300); // 动画时间为0.3s

//         return () => clearTimeout(timeout); // 清理超时
//     }, [currentIndex, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10 w-full h-full">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{
//                     width: `${
//                         currentCardWidth * visibleCards +
//                         gap * (visibleCards - 1)
//                     }px`, // 容器宽度：3个卡片 + 2个间隔
//                 }}
//                 // style={{ width: `calc(100% - ${gap * (visibleCards - 1)}px)` }}
//             >
//                 {/* 外层容器控制宽度 */}
//                 <div
//                     ref={slideRef}
//                     className="flex justify-between gap-8"
//                     style={{
//                         transform: `translateX(-${
//                             currentIndex * (currentCardWidth + gap)
//                         }px)`, // 根据卡片宽度和间隔来滑动
//                     }}
//                     // style={{
//                     //     transform: `translateX(-${
//                     //         currentIndex *
//                     //         (slideRef.current.clientWidth / visibleCards + gap)
//                     //     }px)`,
//                     // }}
//                 >
//                     {productsClone.map((product, index) => (
//                         <div
//                             key={index}
//                             className=" flex-shrink-0"
//                             // style={{
//                             //     flexBasis: `calc(100% / ${visibleCards} - ${gap}px)`,
//                             // }}
//                         >
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div
//                 className="w-14 h-14 rounded-full bg-colorPrimary cursor-pointer"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 <ChevronRight />
//             </div>
//             {/* <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Next
//             </button> */}
//         </div>
//     );
// };

// export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { ChevronRight } from "lucide-react";

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
//     const [currentIndex, setCurrentIndex] = useState(1);
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true);
//     const [visibleCards, setVisibleCards] = useState(3);
//     const gap = 20;

//     const currentCardWidth = useRef(372); // 初始宽度值
//     const slideRef = useRef(null);

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards),
//         ...products,
//         ...products.slice(0, visibleCards),
//     ];

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setVisibleCards(1);
//                 currentCardWidth.current = 200; // 使用 ref 更新值
//             } else if (window.innerWidth < 1024) {
//                 setVisibleCards(2);
//                 currentCardWidth.current = 250;
//             } else {
//                 setVisibleCards(3);
//                 currentCardWidth.current = 300;
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

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
//         if (!slideRef.current) return;
//         setIsTransitionEnabled(false);
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (currentCardWidth.current + gap)
//         }px)`;

//         setTimeout(() => setIsTransitionEnabled(true), 50);
//     }, [currentIndex, visibleCards]);

//     useEffect(() => {
//         if (isTransitionEnabled) {
//             slideRef.current.style.transition = "transform 0.3s ease-in-out";
//         } else {
//             slideRef.current.style.transition = "none";
//         }

//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (currentCardWidth.current + gap)
//         }px)`;

//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(products.length);
//             }, 300);
//             setTimeout(() => setIsTransitionEnabled(true), 350);
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(visibleCards);
//             }, 300);
//             setTimeout(() => setIsTransitionEnabled(true), 350);
//         }

//         const timeout = setTimeout(() => setIsButtonEnabled(true), 300);
//         return () => clearTimeout(timeout);
//     }, [currentIndex, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10 w-full h-full">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{
//                     width: `${
//                         currentCardWidth.current * visibleCards +
//                         gap * (visibleCards - 1)
//                     }px`,
//                 }}
//             >
//                 <div
//                     ref={slideRef}
//                     className="flex justify-between gap-8"
//                     style={{
//                         transform: `translateX(-${
//                             currentIndex * (currentCardWidth.current + gap)
//                         }px)`,
//                     }}
//                 >
//                     {productsClone.map((product, index) => (
//                         <div key={index} className="flex-shrink-0">
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div
//                 className="w-14 h-14 rounded-full bg-colorPrimary cursor-pointer"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 <ChevronRight />
//             </div>
//         </div>
//     );
// };

// export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { ChevronRight } from "lucide-react";

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
//     const [currentIndex, setCurrentIndex] = useState(1);
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true);
//     const [visibleCards, setVisibleCards] = useState(1);
//     const gap = 20;
//     const totalProducts = products.length;
//     const slideRef = useRef(null);

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards),
//         ...products,
//         ...products.slice(0, visibleCards),
//     ];

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setVisibleCards(1);
//             } else if (window.innerWidth < 1024) {
//                 setVisibleCards(2);
//             } else {
//                 setVisibleCards(3);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

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
//         if (!slideRef.current) return;

//         const cardWidth = slideRef.current.clientWidth / visibleCards - gap;

//         setIsTransitionEnabled(false);
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         setTimeout(() => {
//             setIsTransitionEnabled(true);
//         }, 50);
//     }, [currentIndex, visibleCards]);

//     useEffect(() => {
//         if (slideRef.current) {
//             slideRef.current.style.transition = isTransitionEnabled
//                 ? "transform 0.3s ease-in-out"
//                 : "none";

//             const cardWidth = slideRef.current.clientWidth / visibleCards - gap;
//             slideRef.current.style.transform = `translateX(-${
//                 currentIndex * (cardWidth + gap)
//             }px)`;
//         }

//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(totalProducts);
//             }, 300);
//             setTimeout(() => setIsTransitionEnabled(true), 350);
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(visibleCards);
//             }, 300);
//             setTimeout(() => setIsTransitionEnabled(true), 350);
//         }

//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true);
//         }, 300);

//         return () => clearTimeout(timeout);
//     }, [currentIndex, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10 w-full h-full">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{ width: `calc(100% - ${gap * (visibleCards - 1)}px)` }}
//             >
//                 <div ref={slideRef} className="flex justify-between gap-8">
//                     {productsClone.map((product, index) => (
//                         <div
//                             key={index}
//                             className="w-[372px] flex-shrink-0"
//                             style={{
//                                 flexBasis: `calc(100% / ${visibleCards} - ${gap}px)`,
//                             }}
//                         >
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";

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
//     const [currentIndex, setCurrentIndex] = useState(1);
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true);
//     const [visibleCards, setVisibleCards] = useState(1);
//     const gap = 20;
//     const totalProducts = products.length;
//     const slideRef = useRef(null);

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards),
//         ...products,
//         ...products.slice(0, visibleCards),
//     ];

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setVisibleCards(1);
//             } else if (window.innerWidth < 1024) {
//                 setVisibleCards(2);
//             } else {
//                 setVisibleCards(3);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

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
//         if (!slideRef.current) return;

//         const cardWidth = slideRef.current.clientWidth / visibleCards - gap;

//         if (isTransitionEnabled) {
//             slideRef.current.style.transition = "transform 0.3s ease-in-out";
//         } else {
//             slideRef.current.style.transition = "none";
//         }

//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(totalProducts);
//             }, 300);
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false);
//                 setCurrentIndex(visibleCards);
//             }, 300);
//         } else {
//             setIsTransitionEnabled(true);
//         }
//     }, [currentIndex, visibleCards]);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true);
//         }, 300);

//         return () => clearTimeout(timeout);
//     }, [currentIndex]);

//     return (
//         <div className="flex justify-center items-center my-10 w-full h-full">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{ width: `calc(100% - ${gap * (visibleCards - 1)}px)` }}
//             >
//                 <div ref={slideRef} className="flex justify-between gap-8">
//                     {productsClone.map((product, index) => (
//                         <div
//                             key={index}
//                             className="w-[372px] flex-shrink-0"
//                             style={{
//                                 flexBasis: `calc(100% / ${visibleCards} - ${gap}px)`,
//                             }}
//                         >
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled}
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Bestsellers;

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";

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
//     const [currentIndex, setCurrentIndex] = useState(1); // 从第1个索引开始
//     const [isTransitionEnabled, setIsTransitionEnabled] = useState(false); // 初始禁用动画
//     const [isButtonEnabled, setIsButtonEnabled] = useState(true); // 控制按钮是否可点击
//     const cardWidth = 372; // 每个卡片的宽度
//     const gap = 30; // 卡片之间的间隔
//     const visibleCards = 3; // 每页显示 3 个卡片
//     const totalProducts = products.length;

//     // 克隆首尾各一组
//     const productsClone = [
//         ...products.slice(-visibleCards), // 克隆最后几张到最前面
//         ...products,
//         ...products.slice(0, visibleCards), // 克隆最前几张到最后面
//     ];
//     const slideRef = useRef(null); // 引入ref来手动操作DOM

//     const prevPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => prevIndex - 1); // 往前移动
//     };

//     const nextPageHandler = () => {
//         if (!isButtonEnabled) return; // 如果按钮不可用，直接返回
//         setIsButtonEnabled(false); // 禁用按钮
//         setCurrentIndex((prevIndex) => prevIndex + 1); // 往后移动
//     };

//     useLayoutEffect(() => {
//         // 确保初始加载时没有跳动
//         setIsTransitionEnabled(false); // 禁用动画
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 等待页面渲染完成后再开启动画效果
//         setTimeout(() => {
//             setIsTransitionEnabled(true); // 启用动画
//         }, 50);
//     }, []);

//     useEffect(() => {
//         if (isTransitionEnabled) {
//             slideRef.current.style.transition = "transform 0.3s ease-in-out"; // 设置滑动动画
//         } else {
//             slideRef.current.style.transition = "none"; // 禁用动画
//         }

//         // 设置滑动位置
//         slideRef.current.style.transform = `translateX(-${
//             currentIndex * (cardWidth + gap)
//         }px)`;

//         // 边界检测和跳转
//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false); // 禁用动画
//                 setCurrentIndex(totalProducts); // 瞬间跳转到最后一组
//             }, 300); // 动画结束后再跳转
//             setTimeout(() => {
//                 setIsTransitionEnabled(true); // 重新启用动画
//             }, 350); // 确保跳转完成后启用动画
//         } else if (currentIndex === productsClone.length - visibleCards) {
//             setTimeout(() => {
//                 setIsTransitionEnabled(false); // 禁用动画
//                 setCurrentIndex(visibleCards); // 瞬间跳回第一组
//             }, 300); // 动画结束后再跳转
//             setTimeout(() => {
//                 setIsTransitionEnabled(true); // 重新启用动画
//             }, 350); // 确保跳转完成后启用动画
//         }

//         // 启用按钮
//         const timeout = setTimeout(() => {
//             setIsButtonEnabled(true); // 启用按钮
//         }, 300); // 动画时间为0.3s

//         return () => clearTimeout(timeout); // 清理超时
//     }, [currentIndex, isTransitionEnabled]);

//     return (
//         <div className="flex justify-center items-center my-10">
//             <button
//                 className="prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2  rounded-l"
//                 onClick={prevPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Pre
//             </button>
//             <div
//                 className="overflow-hidden"
//                 style={{
//                     width: `${
//                         cardWidth * visibleCards + gap * (visibleCards - 1)
//                     }px`, // 容器宽度：3个卡片 + 2个间隔
//                 }}
//             >
//                 {/* 外层容器控制宽度 */}
//                 <div
//                     ref={slideRef}
//                     className="flex justify-between gap-12"
//                     style={{
//                         transform: `translateX(-${
//                             currentIndex * (cardWidth + gap)
//                         }px)`, // 根据卡片宽度和间隔来滑动
//                     }}
//                 >
//                     {productsClone.map((product, index) => (
//                         <div key={index} className="w-[372px] flex-shrink-0">
//                             <ProductCard product={product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 className="next bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 ml-2 rounded-r"
//                 onClick={nextPageHandler}
//                 disabled={!isButtonEnabled} // 根据按钮状态禁用
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Bestsellers;

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
