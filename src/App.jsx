import { useState } from "react";
import "./App.css";
import Buttonc from "./Components/Buttonc";
import Display from "./Components/Display";

function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newDisplayvalue = calVal + buttonText;
      setCalval(newDisplayvalue);
    }
  };
  return (
    <div className="calculator">
      <Display displayValue={calVal} />
      <Buttonc onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
