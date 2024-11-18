const DashboardTransactions = () => {
  return (
    <div className="bg-colorPrimary p-5 rounded-lg">
      <h2 className="mb-5 font-light text-gray-200">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-200">
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              status: "Pending",
              color: "bg-yellow-200",
              date: "14.02.2024",
              amount: "3,003$",
            },
            {
              status: "Done",
              color: "bg-blue-200",
              date: "14.02.2024",
              amount: "3,003$",
            },
            {
              status: "Cancelled",
              color: "bg-red-200",
              date: "14.02.2024",
              amount: "3,003$",
            },
            {
              status: "Pending",
              color: "bg-yellow-200",
              date: "14.02.2024",
              amount: "3,003$",
            },
          ].map((transaction, index) => (
            <tr key={index} className="border-t">
              <td className="flex items-center gap-3 p-3 text-gray-200">
                <img
                  src="/images/avatars/Sara.webp"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                John Doe
              </td>
              <td className="p-3">
                <span
                  className={`${transaction.color} rounded-md px-2 py-1 text-sm `}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="p-3 text-gray-200">{transaction.date}</td>
              <td className="p-3 text-gray-200">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTransactions;
