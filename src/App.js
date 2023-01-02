import classes from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
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
				<ContactForm />
				<Footer />
			</>
		</div>
	);
}

export default App;
