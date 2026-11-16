import type { EducationEntry } from "../types";
import EntryListOutput, {
  renderEntry,
  type EntryListOutputProps,
} from "./entryListOutput";

export interface EducationOutputProps {
  educationEntries: EducationEntry[];
}

export default function EducationOutput({
  educationEntries,
}: EducationOutputProps) {
  const props: EntryListOutputProps<EducationEntry> = {
    entries: educationEntries,
    renderEntry: renderEntry,
  };
  return <EntryListOutput {...props} />;
}
