import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import TopSection from "./Components/TopSection/TopSection";

function App() {
	return (
		<div className={classes.App}>
			<>
				<Navbar />
				<TopSection />
			</>
		</div>
	);
}

export default App;
