/* eslint-disable react/prop-types */

import { Heart } from "lucide-react";
import StarRating from "../StarRating/StarRating";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    return (
        <div
            className={` 
            ${product.oldPrice > 0 ? styles.onSale : ""} ${styles.wishList}
            flex flex-col relative w-[372px] h-[500px] justify-center items-center bg-gray-100 rounded-3xl`}
            style={{
                "--percentage": `"${Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                        100
                )}%"`,

                "--colorSecondary":
                    (product.oldPrice - product.price) / product.oldPrice > 0.4
                        ? "#EE6352"
                        : "#ffb128",
            }}
        >
            <div className="absolute top-[15px] right-[10px]">
                <Heart size={16} />
            </div>
            <img
                className="hover:scale-110 duration-300 ease-in-out"
                src={`${product.image}`}
                alt={`${product.name}`}
                width={372}
                height={372}
            />
            <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-[16px] mb-3 text-colorPrimary">
                    {product.name}
                </h3>
                <StarRating rate={product.rate} />
                {product.oldPrice > 0 ? (
                    <p className="flex justify-center items-center gap-2">
                        <del className="no-underline">
                            <bdi className="text-[12px] text-[#8097a4] line-through ">
                                <span className="text-[12px]">$</span>
                                {product.oldPrice}
                            </bdi>
                        </del>
                        <ins className="no-underline">
                            <bdi className="text-[16px] weight-[700] text-colorPrimary ">
                                <span className="text-3xl">$</span>
                                {product.price}
                            </bdi>
                        </ins>
                    </p>
                ) : (
                    <p>
                        <bdi className="text-[16px]">
                            <span className="text-[16px]">$</span>
                            {product.price}
                        </bdi>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
