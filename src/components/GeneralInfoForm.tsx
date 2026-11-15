import type { GeneralInfo } from "../types";

interface GeneralInfoFormProps {
  value: GeneralInfo;
  onChange: (v: GeneralInfo) => void;
}

export default function GeneralInfoForm(props: GeneralInfoFormProps) {
  return (
    <>
      <h3>General Info</h3>
      <label>Name: </label>
      <input
        type="text"
        value={props.value.firstName}
        onChange={(e) =>
          props.onChange({ ...props.value, firstName: e.target.value })
        }
      />
    </>
  );
}
