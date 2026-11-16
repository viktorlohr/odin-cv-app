import type { PracticalExperience } from "../types";

interface PracticalExperiencesFormsProps {
  value: [PracticalExperience];
  onChange: (v: [PracticalExperience]) => void;
}

export default function PracticalExperiencesForms(
  props: PracticalExperiencesFormsProps,
) {
  const experiences = props.value;
  const updateExp = (experience: PracticalExperience) =>
    experiences.map((exp) => (exp.id === experience.id ? experience : exp));

  return <div className="practicalExperiences"></div>;
}

interface PracticalExperienceFormProps {
  value: PracticalExperience;
  handleChange: (v: PracticalExperience) => void;
}

function PracticalExperienceForm(props: PracticalExperienceFormProps) {
  return (
    <div className="practicalExperience form">
      <label className="description">
        <input
          type="text"
          value={props.value.description}
          onChange={(e) => props.handleChange(...props.value, e.target.value)}
        />
      </label>
    </div>
  );
}
