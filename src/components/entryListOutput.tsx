import type { ReactNode } from "react";

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
