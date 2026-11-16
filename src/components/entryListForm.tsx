import type { ListEntry } from "../types";

export interface EntryListFormProps<T extends { id: string }> {
  entries: T[];
  setEntries: (newEntries: T[]) => void;
  createEmptyEntry: () => T;
}

export default function EntryListForm<T extends { id: string }>({
  entries,
  createEmptyEntry,
  setEntries,
}: EntryListFormProps<T>) {
  const updateEntry = (entry: T) =>
    setEntries(entries.map((e) => (e.id === entry.id ? entry : e)));

  const insertEntry = (entry: T) => setEntries([entry, ...entries]);

  return (
    <div className="list">
      <button
        className="insert"
        type="button"
        onClick={() => insertEntry(createEmptyEntry())}
      >
        Add
      </button>
      {entries.map((entry) => {
        const props = { entry, updateEntry };
        return <Entry {...props} />;
      })}
    </div>
  );
}

interface EntryFormProps<T extends { id: string }> {
  entry: T;
  updateEntry: (entry: T) => void;
}

function Entry<T extends { id: string }>({
  entry,
  updateEntry,
}: EntryFormProps<T>) {
  const keys = Object.keys(entry).filter(
    (property) => property !== "id",
  ) as (keyof T)[];

  return (
    <div className="entry">
      {keys.map((property) => {
        const props: FormElFromKeyProps<T> = { property, entry, updateEntry };
        return <FormElFromKey {...props} />;
      })}
    </div>
  );
}

interface FormElFromKeyProps<T> {
  property: keyof T;
  entry: T;
  updateEntry: (entry: T) => void;
}

function FormElFromKey<T>({
  property,
  entry,
  updateEntry,
}: FormElFromKeyProps<T>) {
  return (
    <label className={property as string}>
      <span>{displayCamelCase(property as string)}: </span>
      <input
        value={entry[property] as string}
        onChange={(e) => updateEntry({ ...entry, [property]: e.target.value })}
      />
    </label>
  );
}

function displayCamelCase(s: string) {
  const isUpperCase = (c: string) => /^[A-Z]+$/.test(c);

  const _s = s
    .split("")
    .reduce((acc, c) =>
      isUpperCase(c) ? acc + " " + c.toLowerCase() : acc + c,
    );

  return _s.charAt(0).toUpperCase() + _s.slice(1);
}

export function createEmptyEntry(): ListEntry {
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    fromMonth: "",
    fromYear: "",
    untilMonth: "",
    untilYear: "",
  };
}
