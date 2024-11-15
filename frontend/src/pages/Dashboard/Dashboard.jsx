import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DashboardChart from "../../components/DashboardChart/DashboardChart";
import DashboardTransactions from "../../components/DashboardTransactions/DashboardTransactions";

const Dashboard = () => {
    return (
        <div className="flex justify-between p-5">
            {/* Main content */}
            <div className="flex flex-col w-full  space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                </div>

                <DashboardTransactions />

                <DashboardChart />
            </div>

            {/* Sidebar */}
        </div>
    );
};

export default Dashboard;
