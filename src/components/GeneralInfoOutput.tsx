import type { GeneralInfo } from "../types";

export default function GeneralInfoOutput(props: GeneralInfo) {
  return (
    <>
      <h2>General Info</h2>
      <div>
        Name: {props.firstName} {props.lastName}
      </div>
    </>
  );
}
