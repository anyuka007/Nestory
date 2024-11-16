import { ArrowDownUp, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import Pagination from "./components/Pagination";

const DashboardProducts = () => {
    const { register, handleSubmit } = useForm();
    const [products, setProducts] = useState([]);

    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortColumn, setSortColumn] = useState("");
    const navigate = useNavigate();

    const onSearch = (data) => {
        console.log("Search:", data);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/products/admin",
                    {
                        credentials: "include",
                    }
                );
                const data = await response.json();
                console.log("products in dashboard", data);
                setProducts(data);
                setSortedProducts(data);
            } catch (error) {
                console.log("Error fetching products", error);
            }
        };
        fetchProducts();
    }, []);

    const handleSort = (column) => {
        const isAsc = column === sortColumn && sortOrder === "asc";
        const newSortOrder = isAsc ? "desc" : "asc";
        setSortColumn(column);
        setSortOrder(newSortOrder);
        const sorted = [...products].sort((a, b) => {
            if (newSortOrder === "asc") {
                return a[column] > b[column] ? 1 : -1;
            } else {
                return a[column] < b[column] ? 1 : -1;
            }
        });
        setSortedProducts(sorted);
    };

    return (
        <div className="bg-colorPrimary p-6 rounded-lg mt-6">
            {/* Top Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <Search color="white" size={20} />
                    <form
                        onSubmit={handleSubmit(onSearch)}
                        className="w-full max-w-md"
                    >
                        <input
                            {...register("search")}
                            placeholder="Search for a User..."
                            className="w-full p-3  rounded-lg bg-[#2e374a] focus:ring focus:ring-teal-500"
                        />
                    </form>
                </div>
                <button
                    onClick={() => navigate("/dashboard/products/add")}
                    className="p-3 bg-teal-600 text-gray-200 rounded-lg hover:bg-teal-700"
                >
                    Add New
                </button>
            </div>

            {/* Table Section */}
            {/* <Pagination /> */}
            {products?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-colorPrimary text-left text-gray-200">
                        <thead>
                            <tr className="bg-colorPrimary ">
                                <th className="px-4 py-2">Product Name</th>
                                <th className="px-4 py-2  ">
                                    Price
                                    <ArrowDownUp
                                        onClick={() => {
                                            handleSort("price");
                                        }}
                                        size={20}
                                        className="cursor-pointer inline-block ml-4"
                                    />
                                </th>
                                <th className="px-4 py-2 ">
                                    Discount
                                    <ArrowDownUp
                                        onClick={() => handleSort("percentage")}
                                        size={20}
                                        className="cursor-pointer inline-block ml-4"
                                    />
                                </th>
                                <th className="px-4 py-2">Create</th>
                                <th className="px-4 py-2 ">
                                    Stock
                                    <ArrowDownUp
                                        onClick={() =>
                                            handleSort("countInStock")
                                        }
                                        size={20}
                                        className="cursor-pointer inline-block ml-4"
                                    />
                                </th>
                                <th className="px-4 py-2">Category</th>
                                {/* <th className="px-4 py-2">Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedProducts?.map((product) => (
                                <tr
                                    key={product._id}
                                    className="border-t border-colorPrimary text-gray-200"
                                >
                                    <td className="px-4 py-2 flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        {product.name}
                                    </td>

                                    <td className="px-4 py-2">
                                        {product.price}
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.percentage}%
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.createdAt}
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.countInStock}
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.category}
                                    </td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    "/dashboard/products/update/test"
                                                )
                                            }
                                            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                                        >
                                            Update
                                        </button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-200">No products found</p>
            )}

            {/* Pagination */}
            {/* <Pagination /> */}
        </div>
    );
};

export default DashboardProducts;
