import { Users } from "lucide-react";

const DashboardCard = () => {
    return (
        <div className="bg-colorPrimary p-5 rounded-lg flex gap-5 cursor-pointer w-full text-gray-200  hover:bg-gray-600">
            <Users size={24} />
            <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold">Total Users</span>
                <span className="text-2xl font-medium">1865</span>
                <span className="text-sm font-light">
                    <span className="text-lime-500">2.5%</span> more than last
                    month
                </span>
            </div>
        </div>
    );
};

export default DashboardCard;
