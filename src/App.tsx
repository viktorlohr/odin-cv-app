import { useState } from "react";
import "./App.css";
import {
  type EducationEntry,
  type GeneralInfo,
  type PracticalExperience,
} from "./types";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfoOutput from "./components/GeneralInfoOutput";
import PracticalExperienceForm from "./components/practicalExperienceForm";
import PracticalExperiencesOutput from "./components/practicalExperienceOutput";
import EducationEntriesForm from "./components/educationEntriesForm";
import EducationOutput, {
  type EducationOutputProps,
} from "./components/educationOutput";

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

  const initPracticalExperience: PracticalExperience = {
    id: "0",
    description: "This is some work that i have been doing",
  };
  const [practicalExperiences, setPracticalExperiences] = useState<
    PracticalExperience[]
  >([initPracticalExperience]);
  const practicalExperienceProps = {
    practicalExperiences,
    setPracticalExperiences,
  };

  const initEducationEntry = {
    id: "0",
    description: "I've had this education.",
  };
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([
    initEducationEntry,
  ]);
  const educationEntryProps = { educationEntries, setEducationEntries };
  const educationOutputProps: EducationOutputProps = { educationEntries };

  return (
    <>
      <div className="forms">
        <h2>General Information</h2>
        <GeneralInfoForm value={generalInfo} onChange={setGeneralInfo} />

        <h2>Education</h2>
        <EducationEntriesForm {...educationEntryProps} />

        <h2>Practical Experience</h2>
        <PracticalExperienceForm {...practicalExperienceProps} />
      </div>
      <div className="output">
        <h1>Curriculum Vitae</h1>

        <h2>Personal Information</h2>
        <GeneralInfoOutput {...generalInfo} />

        <h2>Education</h2>
        <EducationOutput {...educationOutputProps} />

        <h2>Pracitcal Experience</h2>
        <PracticalExperiencesOutput experiences={practicalExperiences} />
      </div>
    </>
  );
}

export default App;
