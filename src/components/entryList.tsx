interface EntryListProps<T extends { id: string }> {
  entries: T[];
  setEntries: (newEntries: T[]) => void;
}

export default function EntryList<T extends { id: string }>(
  props: EntryListProps<T>,
) {
  const entries = props.entries;
  const updateEntry = (entry: T) =>
    props.setEntries(entries.map((e) => (e.id === entry.id ? entry : e)));
  const insertEntry = (entry: T) => props.setEntries([...entries, entry]);

  return (
    <div className="list">
      <button className="insert">Add</button>
    </div>
  );
}

interface EntryProps<T extends { id: string }> {
  entry: T;
  updateEntry: (entry: T) => void;
}

function Entry<T extends { id: string }>(props: EntryProps<T>) {
  const entry = props.entry;
  const keys = Object.keys(entry).filter((key) => key !== "id") as (keyof T)[];

  return <div className="entry">{keys.map}</div>;
}

interface FormElFromKeyProps<T> {
  key: keyof T;
  entry: T;
  updateEntry: (entry: T) => void;
}

function FormElFromKey<T>({ key, entry, updateEntry }: FormElFromKeyProps<T>) {
  return (
    <label className={key as string}>
      <input
        value={entry[key] as string}
        onChange={(e) => updateEntry({ ...entry, [key]: e.target.value })}
      />
    </label>
  );
}
