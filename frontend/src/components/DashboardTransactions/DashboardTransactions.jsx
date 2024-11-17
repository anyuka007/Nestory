import { BadgeDollarSign } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";

export const fetchTransactions = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/order/admin", {
            credentials: "include",
        });
        const data = await response.json();
        console.log("transactions in dashboard", data);
        return data;
    } catch (error) {
        console.log("Error fetching transactions", error);
        return [];
    }
};
const DashboardTransactions = () => {
    const { setAllOrders } = useContext(AppContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getAllOrders = async () => {
            const data = await fetchTransactions(); // 获取产品数据
            setTransactions(data.orders);
            setAllOrders(data.allOrders);
        };

        getAllOrders();
    }, []);

    return (
        <div className="bg-colorPrimary p-5 rounded-lg">
            <h2 className="mb-5 text-4xl font-semibold text-gray-200">
                Latest Transactions
            </h2>
            <table className="w-full">
                <thead>
                    <tr className="text-left text-gray-200">
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions?.map((transaction, index) => (
                        <tr key={index} className="border-t">
                            <td className=" p-3 text-gray-200">
                                <BadgeDollarSign className="mr-2 inline-block" />
                                {/* <img
                                    src="/images/avatars/Sara.webp"
                                    alt="User Avatar"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover"
                                /> */}
                                {transaction.userId.firstName +
                                    " " +
                                    transaction.userId.lastName}
                            </td>
                            <td className="p-3 text-gray-200">
                                {transaction.userId.email}
                            </td>
                            <td className="p-3 text-gray-200">
                                {transaction.status}
                                {/* <span
                                    className={`${transaction.color} rounded-md px-2 py-1 text-sm `}
                                >
                                    
                                </span> */}
                            </td>
                            <td className="p-3 text-gray-200">
                                {transaction.updatedAt}
                            </td>
                            <td className="p-3 text-gray-200">
                                ${transaction.total}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTransactions;
