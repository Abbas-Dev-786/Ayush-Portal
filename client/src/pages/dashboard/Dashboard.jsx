import { useEffect } from "react";
import DashboardLayout from "../../components/dashboard/Dashboard-layout";
import { socket } from "../../socket";
import PostContainer from "../../components/dashboard/PostContainer";

const Dashboard = () => {
  useEffect(() => {
    socket.connect();

    socket.emit("message", "hello client");
  }, []);

  return (
    <DashboardLayout>
      <PostContainer />
    </DashboardLayout>
  );
};

export default Dashboard;
