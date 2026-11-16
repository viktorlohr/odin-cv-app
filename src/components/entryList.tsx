interface EntryListProps<T> {
  entries: T[];
  setEntries: (newEntries: T[]) => void;
}

export default function EntryList<T>(props: EntryListProps) {
  const entries = props.entries;
  const setEntry = props.setEntries;
  const addEntry = (entry: T) => props.setEntries([...entries, entry]);
}
