import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import TopSection from "./Components/TopSection/TopSection";
import UspSection from "./Components/UspSection/UspSection";

function App() {
	return (
		<div className={classes.App}>
			<>
				<Navbar />
				<TopSection />
				<UspSection />
			</>
		</div>
	);
}

export default App;
