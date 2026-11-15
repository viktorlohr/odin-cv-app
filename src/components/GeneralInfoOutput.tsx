import type { GeneralInfo } from "../types";

export default function GeneralInfoOutput(props: GeneralInfo) {
  return (
    <>
      <h1>General Info</h1>
      <div>{props.firstName}</div>
    </>
  );
}
