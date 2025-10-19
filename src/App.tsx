import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Comments from "./components/Comments";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

const App = () => {
	useReveal(".reveal");
	useReveal(".reveal-left");
	useReveal(".reveal-right");

	return (
		<div className="bg-backgrounds text-text">
			<Navbar />
			<main>
				<Header />
				<AboutUs />
				<Services />
				<Menu />
				<Comments />
				<Reservation />
			</main>
			<Footer />
		</div>
	);
};

export default App;
