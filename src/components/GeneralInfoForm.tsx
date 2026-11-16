import type { GeneralInfo } from "../types";

// TODO: replace with generic implementation

interface GeneralInfoFormProps {
  value: GeneralInfo;
  onChange: (v: GeneralInfo) => void;
}

export default function GeneralInfoForm(props: GeneralInfoFormProps) {
  const info = props.value;
  return (
    <div className="generalInfo entry">
      <label className="firstName">
        First name:
        <input
          type="text"
          value={info.firstName}
          onChange={(e) =>
            props.onChange({ ...props.value, firstName: e.target.value })
          }
        />
      </label>
      <label className="lastName">
        Last name:
        <input
          type="text"
          value={info.lastName}
          onChange={(e) =>
            props.onChange({ ...info, lastName: e.target.value })
          }
        />
      </label>
      <label className="street">
        Street:
        <input
          type="text"
          value={info.street}
          onChange={(e) => props.onChange({ ...info, street: e.target.value })}
        />
      </label>
      <label className="streetNumber">
        Number:
        <input
          type="number"
          value={info.streetNumber}
          onChange={(e) =>
            props.onChange({
              ...info,
              streetNumber: Number(e.target.value),
            })
          }
        />
      </label>
      <label className="postalCode">
        Postal code:
        <input
          type="number"
          value={info.postalCode}
          onChange={(e) =>
            props.onChange({
              ...info,
              postalCode: Number(e.target.value),
            })
          }
        />
      </label>
      <label className="city">
        City:
        <input
          type="text"
          value={info.city}
          onChange={(e) =>
            props.onChange({
              ...info,
              city: e.target.value,
            })
          }
        />
      </label>
      <label className="image">
        Image Link:
        <input
          type="text"
          value={info.profilePictureLink}
          onChange={(e) =>
            props.onChange({
              ...info,
              profilePictureLink: e.target.value,
            })
          }
        />
      </label>
    </div>
  );
}
