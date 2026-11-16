import type { EducationEntry } from "../types";
import EntryListOutput, { type EntryListOutputProps } from "./entryListOutput";

export interface EducationOutputProps {
  educationEntries: EducationEntry[];
}

export default function EducationOutput({
  educationEntries,
}: EducationOutputProps) {
  const props: EntryListOutputProps<EducationEntry> = {
    entries: educationEntries,
    renderEntry: renderEducationEntry,
  };
  return <EntryListOutput {...props} />;
}

function renderEducationEntry(entry: EducationEntry) {
  const props = { entry };
  return <EducationEntryOutput {...props} />;
}

interface EducationEntryOutputProps {
  entry: EducationEntry;
}

function EducationEntryOutput({ entry }: EducationEntryOutputProps) {
  return <div className="educationEntry">{entry.description}</div>;
}
