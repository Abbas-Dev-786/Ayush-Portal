import { useEffect } from "react";
import DashboardLayout from "../../components/dashboard/dashboard-layout";
import { socket } from "../../socket";

const Dashboard = () => {
  useEffect(() => {
    socket.connect();

    socket.emit("message", "hello client");
  }, []);

  return <DashboardLayout>MORE Content</DashboardLayout>;
};

export default Dashboard;
