import type { ReactNode } from "react";
import type { ListEntry } from "../types";

export interface EntryListOutputProps<T extends { id: string }> {
  entries: T[];
  renderEntry: (entry: T) => ReactNode;
}

export default function EntryListOutput<T extends { id: string }>({
  entries,
  renderEntry,
}: EntryListOutputProps<T>) {
  return entries.map((entry) => <div key={entry.id}>{renderEntry(entry)}</div>);
}

export function renderEntry(listEntry: ListEntry) {
  const props: EntryProps = { listEntry };
  return <Entry {...props} />;
}

interface EntryProps {
  listEntry: ListEntry;
}

export function Entry({ listEntry }: EntryProps) {
  return (
    <div className="entry">
      <div className="datesAndTitle">
        <div className="dates">
          from {listEntry.fromMonth}/{listEntry.fromYear} until{" "}
          {listEntry.untilMonth}/{listEntry.untilYear}
        </div>
        <h3>{listEntry.title}</h3>
      </div>
      <div className="description">{listEntry.description}</div>
    </div>
  );
}
