import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [useInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <>
      <Header />
      <UserInput />
      <Results />
    </>
  );
}

export default App;
