import type { EducationEntry } from "../types";
import EntryListForm, {
  createEmptyEntry,
  type EntryListFormProps,
} from "./entryListForm";

interface EducationEntriesFormProps {
  educationEntries: EducationEntry[];
  setEducationEntries: (entries: EducationEntry[]) => void;
}

function createEmptyEducationEntry(): EducationEntry {
  return createEmptyEntry();
}

export default function EducationEntriesForm({
  educationEntries,
  setEducationEntries,
}: EducationEntriesFormProps) {
  const props: EntryListFormProps<EducationEntry> = {
    entries: educationEntries,
    setEntries: setEducationEntries,
    createEmptyEntry: createEmptyEducationEntry,
  };
  return <EntryListForm<EducationEntry> {...props} />;
}
