import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		console.log("Hey");
	}, []);

	return (
		<h1>Welcome to React App thats build using Webpack and Babel separately</h1>
	);
};

export default App;
