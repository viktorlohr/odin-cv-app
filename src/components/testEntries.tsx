import EntryList, { type EntryListProps } from "./entryList";

interface TestEntry {
  id: string;
  foo: string;
}
const testEntry = { id: "0", foo: "foo" };

export const testEntries = [testEntry];

const createEmptyTestEntry: () => TestEntry = () => ({
  id: crypto.randomUUID(),
  foo: "",
});

export default function (setTestEntries: (entries: TestEntry[]) => void) {
  const props: EntryListProps<TestEntry> = {
    entries: testEntries,
    createEmptyEntry: createEmptyTestEntry,
    setEntries: setTestEntries,
  };
  return <EntryList {...props} />;
}
