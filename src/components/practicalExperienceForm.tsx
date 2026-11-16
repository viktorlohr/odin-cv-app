import type { PracticalExperience } from "../types";

interface PracticalExperiencesFormsProps {
  value: [PracticalExperience];
  onChange: (v: [PracticalExperience]) => void;
}

export default function PracticalExperiencesForms(
  props: PracticalExperiencesFormsProps,
) {
  const experiences = props.value;
  const updateExperience = (experience: PracticalExperience) =>
    experiences.map((exp) => (exp.id === experience.id ? experience : exp));

  return (
    <div className="practicalExperiences">
      {experiences.map((exp) =>
        PracticalExperienceForm({ value: exp, updateExperience }),
      )}
    </div>
  );
}

interface PracticalExperienceFormProps {
  value: PracticalExperience;
  updateExperience: (v: PracticalExperience) => void;
}

function PracticalExperienceForm(props: PracticalExperienceFormProps) {
  const experience = props.value;
  return (
    <div className="practicalExperience form">
      <label className="description">
        <input
          type="text"
          value={props.value.description}
          onChange={(e) =>
            props.updateExperience({
              ...experience,
              description: e.target.value,
            })
          }
        />
      </label>
    </div>
  );
}
