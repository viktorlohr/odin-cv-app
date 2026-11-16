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
  const removeExperience = (id: string) =>
    props.onChange(experiences.filter((exp) => exp.id !== id));
  const addExperience = (exp: PracticalExperience) =>
    props.onChange([...experiences, exp]);

  return (
    <div className="practicalExperiences">
      <h3>Practical Experiences</h3>
      <button
        type="button"
        onClick={() =>
          addExperience({ id: crypto.randomUUID(), description: "" })
        }
      >
        Add
      </button>
      {experiences.map((exp) => (
        <PracticalExperienceForm
          key={exp.id}
          value={exp}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />
      ))}
    </div>
  );
}

interface PracticalExperienceFormProps {
  value: PracticalExperience;
  updateExperience: (v: PracticalExperience) => void;
  removeExperience: (id: string) => void;
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
      <button
        className="remove"

        onClick={(e) => {
          e.preventDefault();
          props.removeExperience(experience.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}
