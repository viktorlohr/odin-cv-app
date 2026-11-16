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

export interface PracticalExperience {
  // from: Date;
  // to: Date;
  id: string;
  description: string;
}

export interface EducationEntry {
  id: string;
  description: string;
}
