import type { PracticalExperience } from "../types";
import EntryListForm, { createEmptyEntry } from "./entryListForm";

export interface PracticalExperienceFormProps {
  practicalExperiences: PracticalExperience[];
  setPracticalExperiences: (entries: PracticalExperience[]) => void;
}

function createEmptyPracticalExperience(): PracticalExperience {
  return createEmptyEntry();
}

export default function PracticalExperienceForm({
  practicalExperiences,
  setPracticalExperiences,
}: PracticalExperienceFormProps) {
  const props = {
    entries: practicalExperiences,
    setEntries: setPracticalExperiences,
    createEmptyEntry: createEmptyPracticalExperience,
  };
  return <EntryListForm<PracticalExperience> {...props} />;
}
