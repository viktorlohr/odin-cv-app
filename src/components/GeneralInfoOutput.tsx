import type { GeneralInfo } from "../types";

export default function GeneralInfoOutput(props: GeneralInfo) {
  return (
    <div className="entry generalInfo">
      <div className="info">
        <div className="name">
          🙋 {props.firstName} {props.lastName}
        </div>
        <div>
          📍{props.street} {props.streetNumber}, {props.postalCode} {props.city}
        </div>
        <div>📧 {props.email}</div>
        <div>📞 {props.phone}</div>
      </div>
      <img src={props.profilePictureLink} />
    </div>
  );
}
