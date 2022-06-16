import { useEffect } from "react";
import "@src/index.css";

const message = "Hey";

const App = () => {
  useEffect(() => {
    console.log(message);
  }, []);

  return (
    <div>
      <h1 className="text-lg text-red-500">Welcome to React App</h1>
    </div>
  );
};

export default App;
