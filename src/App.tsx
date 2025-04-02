import EmployeeListTitle from "./components/EmployeeListTitle";
import { useEffect, useLayoutEffect } from "react";
import TopBar from "./components/TopBar";
import { DisplayEmployees } from "./components/DisplayEmployees";
import { useAppLoad, useAppSettings, useEmployeeData } from "./state/store";
import Footer from "./components/Footer";

function App() {
	// AppLoad
	const appLoad = useAppLoad.use.appLoad();
	const setAppLoad = useAppLoad.use.setAppLoad();
	// Settings state
	const getAppSettings = useAppSettings.use.getAppSettings();
	const settings = useAppSettings.use.appSettings();
	// Employee state
	const getEmployees = useEmployeeData.use.getEmployees();

	useEffect(() => {
		getEmployees();
		getAppSettings();
		setAppLoad(false);
	}, []);

	useLayoutEffect(() => {
		document.body.style.backgroundColor = `var(--background-color-${settings.colorMode})`;
	}, [settings]);

	if (appLoad) {
		return <div>Loading...</div>;
	}

	// Usage
	return (
		<div className="container-fluid">
			<TopBar />
			<EmployeeListTitle />
			<DisplayEmployees />
			<Footer />
			{/*<button onClick={() => AddDummyData()}>Add Dummy Data</button>*/}
		</div>
	);
}

export default App;
