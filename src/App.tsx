import { useState } from "react";
import "./App.css";
import { type GeneralInfo, type PracticalExperience } from "./types";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfoOutput from "./components/GeneralInfoOutput";
import PracticalExperienceForm from "./components/practicalExperienceForm";

function App() {
  const initGeneralInfo: GeneralInfo = {
    firstName: "Max",
    lastName: "Mustermann",
    street: "Musterstreet",
    streetNumber: 42,
    postalCode: 12345,
    city: "Mustercity",
    email: "max@mustermann.de",
    phone: "0 123 5678 9101",
  };

  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>(initGeneralInfo);
  const [practicalExperiences, setPracticalExperiences] = useState<
    PracticalExperience[]
  >([]);

  return (
    <>
      <div className="forms">
        <GeneralInfoForm value={generalInfo} onChange={setGeneralInfo} />
        <PracticalExperienceForm
          value={practicalExperiences}
          onChange={setPracticalExperiences}
        />
      </div>
      <div className="output">
        <h1>Curriculum Vitae</h1>
        <GeneralInfoOutput {...generalInfo} />
      </div>
    </>
  );
}

export default App;
