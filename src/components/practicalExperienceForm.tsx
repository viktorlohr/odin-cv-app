import type { PracticalExperience } from "../types";

interface PracticalExperiencesFormsProps {
  value: PracticalExperience[];
  onChange: (v: PracticalExperience[]) => void;
}

export default function PracticalExperiencesForms(
  props: PracticalExperiencesFormsProps,
) {
  const experiences = props.value;
  const updateExperience = (experience: PracticalExperience) =>
    props.onChange(
      experiences.map((exp) => (exp.id === experience.id ? experience : exp)),
    );

  return (
    <div className="practicalExperiences">
      <h3>Practical Experiences</h3>
      {experiences.map((exp) => (
        <PracticalExperienceForm
          key={exp.id}
          value={exp}
          updateExperience={updateExperience}
        />
      ))}
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
        Description:
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
