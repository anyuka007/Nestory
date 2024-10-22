/* eslint-disable react/prop-types */

import StarRating from "../StarRating/StarRating";

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col gap-2 w-[380px] h-[500px] justify-center items-center bg-gray-100 rounded-3xl">
            <img src={`${product.image}`} alt="logo" width={325} height={325} />
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
