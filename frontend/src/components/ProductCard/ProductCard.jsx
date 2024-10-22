/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col gap-2 w-[300px] h-[400px]">
            <img src={`${product.image}`} alt="logo" width={325} height={325} />
            <h3 className="text-[16px]">{product.name}</h3>
            <p>
                <bdi className="text-[16px]">
                    <span className="text-[16px]">$</span>
                    {product.price}
                </bdi>
            </p>
            <p className="flex justify-center items-center gap-2">
                <del>
                    <bdi className="text-[12px] text-[#8097a4] line-through decoration-[#8097a4]">
                        <span className="text-[13px]">$</span>
                        {product.oldPrice}
                    </bdi>
                </del>
                <ins>
                    <bdi className="text-[16px] weight-[700] ">
                        <span className="text-3xl">$</span>
                        {product.price}
                    </bdi>
                </ins>
            </p>
        </div>
    );
};

export default ProductCard;
