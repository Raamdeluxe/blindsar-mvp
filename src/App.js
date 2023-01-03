import classes from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/ProductSection/ProductSection";
import TopSection from "./Components/TopSection/TopSection";
import UspSection from "./Components/UspSection/UspSection";

function App() {
	return (
		<div className={classes.App}>
			<>
				<Navbar />
				<TopSection />
				<UspSection />
				<ProductSection />
				<ContactForm />
				<Footer />
			</>
		</div>
	);
}

export default App;
