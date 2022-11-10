import { useContext } from "react";
import { DashboardContext } from "../contexts/dashboard";

const useDashboard = () => {
	const context = useContext(DashboardContext)
	return context;
}

export default useDashboard;
