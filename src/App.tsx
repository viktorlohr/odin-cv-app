import { useState } from "react";
import "./App.css";
import { type GeneralInfo } from "./types";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfoOutput from "./components/GeneralInfoOutput";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    firstName: "",
  });

  return (
    <>
      <div className="forms">
        <GeneralInfoForm value={generalInfo} onChange={setGeneralInfo} />
      </div>
      <div className="output">
        <h1>Curriculum Vitae</h1>
        <GeneralInfoOutput {...generalInfo} />
      </div>
    </>
  );
}

export default App;
