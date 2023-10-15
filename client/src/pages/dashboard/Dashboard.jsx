import { useEffect } from "react";
import DashboardLayout from "../../components/dashboard/Dashboard-layout";
import PostContainer from "../../components/dashboard/PostContainer";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <PostContainer />
    </DashboardLayout>
  );
};

export default Dashboard;
