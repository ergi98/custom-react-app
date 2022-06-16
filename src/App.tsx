import { useEffect } from "react";

const message = "Hey";

const App = () => {
  useEffect(() => {
    console.log(message);
  }, []);

  return (
    <div>
      <h1>Welcome to React App</h1>
    </div>
  );
};

export default App;
