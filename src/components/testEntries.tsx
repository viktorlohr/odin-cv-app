import EntryList, { type EntryListProps } from "./entryList";

export interface TestEntry {
  id: string;
  foo: string;
}
const testEntry = { id: "0", foo: "foo" };

export const initTestEntries = [testEntry];

const createEmptyTestEntry: () => TestEntry = () => ({
  id: crypto.randomUUID(),
  foo: "",
});

export interface TestEntryProps {
  testEntries: TestEntry[];
  setTestEntries: (newEntries: TestEntry[]) => void;
}

export default function ({ testEntries, setTestEntries }: TestEntryProps) {
  const props: EntryListProps<TestEntry> = {
    entries: testEntries,
    createEmptyEntry: createEmptyTestEntry,
    setEntries: setTestEntries,
  };
  return <EntryList {...props} />;
}
