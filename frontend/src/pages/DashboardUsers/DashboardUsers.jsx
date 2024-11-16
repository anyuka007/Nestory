import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import Pagination from "./components/Pagination";

const DashboardUsers = () => {
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
                    onClick={() => navigate("/dashboard/users/add")}
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
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Create</th>
                            <th className="px-4 py-2">Role</th>
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
                                John
                            </td>
                            <td className="px-4 py-2">Doe</td>
                            <td className="px-4 py-2">John@mail.com</td>
                            <td className="px-4 py-2">03.11.2024</td>
                            <td className="px-4 py-2">Admin</td>
                            <td className="px-4 py-2 flex gap-2">
                                <button
                                    onClick={() =>
                                        navigate("/dashboard/users/update/test")
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

export default DashboardUsers;
