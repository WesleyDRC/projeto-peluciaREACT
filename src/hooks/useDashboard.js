import { useContext } from "react";
import { DashboardContext } from "../contexts/dashboard";

const useDashboard = () => {
	return useContext(DashboardContext);
}

export default useDashboard;
