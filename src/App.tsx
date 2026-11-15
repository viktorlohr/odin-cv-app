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
      <GeneralInfoForm value={generalInfo} onChange={setGeneralInfo} />
      <GeneralInfoOutput {...generalInfo} />
    </>
  );
}

export default App;
