export interface GeneralInfo {
  firstName: string;
  lastName: string;
  street: string;
  streetNumber: number;
  city: string;
  postalCode: number;
  email: string;
  phone: string;
}

export interface ListEntry {
  id: string;
  title: string;
  description: string;
  fromMonth: string;
  fromYear: string;
  untilMonth: string;
  untilYear: string;
}

export type PracticalExperience = ListEntry;

export type EducationEntry = ListEntry;
