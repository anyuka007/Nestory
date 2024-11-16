import { useForm } from "react-hook-form";

const DashboardUpdateProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // 在这里发送表单数据到 API
        // fetch('/api/products', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data),
        // });
    };

    return (
        <div className="bg-colorPrimary p-5 rounded-lg mt-5">
            <form
                className="flex flex-wrap justify-between gap-10"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="text-gray-200 text-left w-[60%] block mb-[-1.2rem]  text-3xl">
                    Product Name
                </label>
                <input
                    {...register("name", {
                        required: "Product Name is required",
                    })}
                    type="text"
                    placeholder="Name"
                    className={`p-3 bg-[#2e374a] text-gray-200 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                    } rounded-md mb-5 w-[60%]`}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mb-5 w-full">
                        {errors.name.message}
                    </p>
                )}

                <label className="text-gray-200 text-left w-[60%] block mb-[-1.2rem] text-3xl">
                    Price
                </label>
                <input
                    {...register("price", {
                        required: "Last name is required",
                    })}
                    type="number"
                    placeholder="Price"
                    className={`p-3 bg-[#2e374a] text-gray-200 border ${
                        errors.price ? "border-red-500" : "border-gray-700"
                    } rounded-md mb-5 w-[60%]`}
                />
                {errors.price && (
                    <p className="text-red-500 text-sm mb-5 w-full">
                        {errors.price.message}
                    </p>
                )}

                <label className="text-gray-200 text-left w-[60%] block mb-[-1.2rem] text-3xl">
                    Discount
                </label>
                <input
                    {...register("discount", {
                        required: "Last name is required",
                    })}
                    type="number"
                    placeholder="Discount"
                    className={`p-3 bg-[#2e374a] text-gray-200 border ${
                        errors.discount ? "border-red-500" : "border-gray-700"
                    } rounded-md mb-5 w-[60%]`}
                />
                {errors.discount && (
                    <p className="text-red-500 text-sm mb-5 w-full">
                        {errors.discount.message}
                    </p>
                )}

                <label className="text-gray-200 text-left w-[60%] block mb-[-1.2rem] text-3xl">
                    Quantity in Stock
                </label>
                <input
                    {...register("quantity", {
                        required: "Last name is required",
                    })}
                    type="number"
                    placeholder="Quantity in Stock"
                    className={`p-3 bg-[#2e374a] text-gray-200 border ${
                        errors.quantity ? "border-red-500" : "border-gray-700"
                    } rounded-md mb-5 w-[60%]`}
                />
                {errors.quantity && (
                    <p className="text-red-500 text-sm mb-5 w-full">
                        {errors.quantity.message}
                    </p>
                )}

                <label className="text-gray-200 text-left w-[60%] block mb-[-1.2rem] text-3xl">
                    Category
                </label>
                <select
                    {...register("category", {
                        required: "Category is required",
                    })}
                    className={`p-3 bg-[#2e374a] text-gray-200 border ${
                        errors.role ? "border-red-500" : "border-gray-700"
                    } rounded-md mb-5 w-[60%]`}
                >
                    <option value="">Select a Category</option>
                    <option value="Sofa">Sofas</option>
                    <option value="Bed">Beds</option>
                    <option value="Chair">Chairs</option>
                    <option value="Table">Tables</option>
                    <option value="Desk">Desks</option>
                </select>
                {errors.category && (
                    <p className="text-red-500 text-sm mb-5 w-full">
                        {errors.category.message}
                    </p>
                )}

                <label className="text-gray-200 text-left w-[60%] block mb-[-1.2rem] text-3xl">
                    Description
                </label>
                <textarea
                    {...register("description", {
                        required: "Address is required",
                    })}
                    rows="4"
                    placeholder="Description"
                    className={`p-3 bg-[#2e374a] text-gray-200 border ${
                        errors.address ? "border-red-500" : "border-gray-700"
                    } rounded-md mb-5 w-[60%]`}
                ></textarea>
                {errors.description && (
                    <p className="text-red-500 text-sm mb-5 w-full">
                        {errors.description.message}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-[60%] p-3 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default DashboardUpdateProduct;
