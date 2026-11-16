import type { GeneralInfo } from "../types";

export default function GeneralInfoOutput(props: GeneralInfo) {
  return (
    <div className="entry">
      <div>
        Name: {props.firstName} {props.lastName}
      </div>
    </div>
  );
}
