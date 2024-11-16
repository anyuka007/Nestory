import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import Pagination from "./components/Pagination";

const DashboardProducts = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSearch = (data) => {
        console.log("Search:", data);
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
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-colorPrimary text-left text-gray-200">
                    <thead>
                        <tr className="bg-colorPrimary">
                            <th className="px-4 py-2">Product Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Discount</th>
                            <th className="px-4 py-2">Create</th>
                            <th className="px-4 py-2">Stock</th>
                            <th className="px-4 py-2">Category</th>
                            {/* <th className="px-4 py-2">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-colorPrimary text-gray-200">
                            <td className="px-4 py-2 flex items-center gap-3">
                                <img
                                    src="/images/logo/logo5.png"
                                    alt="John Doe"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                Sofa
                            </td>

                            <td className="px-4 py-2">$1,000</td>
                            <td className="px-4 py-2">12%</td>
                            <td className="px-4 py-2">03.11.2024</td>
                            <td className="px-4 py-2">18</td>
                            <td className="px-4 py-2">Sofas</td>
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
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {/* <Pagination /> */}
        </div>
    );
};

export default DashboardProducts;
