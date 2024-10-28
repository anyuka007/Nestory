/* eslint-disable react/prop-types */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const products = [
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
    {
        name: "Product Name",
        image: "/images/deskes/desk2.webp",
        rate: 4.9,
        percentage: 0,
        price: 1060,
    },
];

const HotDeals = ({ cardWidth, visibleCards }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const gap = 30;

    const totalProducts = products.length;

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
        <>
            <h2 className=" text-colorPrimary font-bold text-center mt-56">
                HOT DEALS
            </h2>
            <div className="flex justify-center items-center my-10 flex-shrink-0">
                <button
                    className="next bg-colorPrimary hover:bg-[#030f42] text-white py-2 mr-1 rounded-full w-16 h-16 flex items-center justify-center"
                    onClick={prevPageHandler}
                    disabled={!isButtonEnabled}
                >
                    <ChevronLeft />
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
                    className="next bg-colorPrimary hover:bg-[#030f42] text-white py-2 ml-1 rounded-full w-16 h-16 flex items-center justify-center"
                    onClick={nextPageHandler}
                    disabled={!isButtonEnabled}
                >
                    <ChevronRight />
                </button>
            </div>
        </>
    );
};

export default HotDeals;
