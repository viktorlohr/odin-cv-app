import EntryListForm, { type EntryListFormProps } from "./entryListForm";

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

export interface TestEntriesProps {
  testEntries: TestEntry[];
  setTestEntries: (newEntries: TestEntry[]) => void;
}

export default function ({ testEntries, setTestEntries }: TestEntriesProps) {
  const props: EntryListFormProps<TestEntry> = {
    entries: testEntries,
    createEmptyEntry: createEmptyTestEntry,
    setEntries: setTestEntries,
  };
  return <EntryListForm {...props} />;
}
