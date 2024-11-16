import { ArrowDownUp, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { ImUserTie } from "react-icons/im";
import Pagination from "../../components/Pagination/Pagination";
// import Pagination from "./components/Pagination";

const DashboardUsers = () => {
    const { register, handleSubmit } = useForm();
    const [users, setUsers] = useState([]);

    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortColumn, setSortColumn] = useState("");

    const [paginatedUsers, setPaginatedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 当前页码
    // const [itemsPerPage] = useState(5); // 每页显示5条数据
    const itemsPerPage = 5;

    const navigate = useNavigate();

    const onSearch = (data) => {
        console.log("Search:", data);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/account/user/admin",
                    {
                        credentials: "include",
                    }
                );
                const data = await response.json();
                console.log("users in dashboard", data);
                setUsers(data);
                setSortedUsers(data);
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
        const sorted = [...users].sort((a, b) => {
            if (newSortOrder === "asc") {
                return a[column] > b[column] ? 1 : -1;
            } else {
                return a[column] < b[column] ? 1 : -1;
            }
        });
        setSortedUsers(sorted);
    };

    // 根据当前页和每页数据数更新分页内容
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedUsers(sortedUsers.slice(startIndex, endIndex));
    }, [sortedUsers, currentPage, itemsPerPage]);

    // 分页切换逻辑
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
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
            {/* Pagination and Sorting */}
            {users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-colorPrimary text-left text-gray-200">
                        <thead>
                            <tr className="bg-colorPrimary">
                                <th className="px-4 py-2">
                                    First Name
                                    <ArrowDownUp
                                        onClick={() => {
                                            handleSort("firstName");
                                        }}
                                        size={20}
                                        className="cursor-pointer inline-block ml-4"
                                    />
                                </th>
                                <th className="px-4 py-2">
                                    Last Name
                                    <ArrowDownUp
                                        onClick={() => {
                                            handleSort("lastName");
                                        }}
                                        size={20}
                                        className="cursor-pointer inline-block ml-4"
                                    />
                                </th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Create</th>
                                <th className="px-4 py-2">
                                    Role
                                    <ArrowDownUp
                                        onClick={() => {
                                            handleSort("role");
                                        }}
                                        size={20}
                                        className="cursor-pointer inline-block ml-4"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.map((user) => (
                                <tr
                                    key={user._id}
                                    className="border-t border-colorPrimary text-gray-200"
                                >
                                    <td className="px-4 py-2 flex items-center gap-3">
                                        {user.role === "admin" ? (
                                            <GrUserAdmin />
                                        ) : (
                                            <ImUserTie />
                                        )}
                                        {/* <img
                                            src="/images/logo/logo5.png"
                                            alt="John Doe"
                                            className="w-10 h-10 rounded-full object-cover"
                                        /> */}
                                        {user.firstName}
                                    </td>
                                    <td className="px-4 py-2">
                                        {user.lastName}
                                    </td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">
                                        {user.createdAt}
                                    </td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    "/dashboard/users/update/test"
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
                <p className="text-gray-200">No users found.</p>
            )}

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                hasPrev={currentPage > 1}
                hasNext={
                    currentPage < Math.ceil(sortedUsers.length / itemsPerPage)
                }
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default DashboardUsers;
