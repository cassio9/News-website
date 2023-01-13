import "./App.css";
import Header from "./components/Header";
import MainArticles from "./components/MainArticles";
import Trending from "./components/Trending";

function App() {
	return (
		<div className="bg-OffWhite min-h-screen max-h-fit px-2 pt-8 font-Inter flex flex-col items-center">
			<Header />
			<MainArticles />
			<Trending />
		</div>
	);
}

export default App;
