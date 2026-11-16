import type { PracticalExperience } from "../types";

interface PracticalExperiencesOutputProps {
  experiences: PracticalExperience[];
}

export default function PracticalExperiencesOutput(
  props: PracticalExperiencesOutputProps,
) {
  return (
    <div className="practicalExperiences">
      <h2>Practical Experiences</h2>
      {props.experiences.map((exp) => (
        <PracticalExperienceOutput key={exp.id} experience={exp} />
      ))}
    </div>
  );
}

interface PracticalExperienceOutputProps {
  key: number;
  experience: PracticalExperience;
}

function PracticalExperienceOutput(props: PracticalExperienceOutputProps) {
  return (
    <div className="practicalExperience">
      <div>{props.experience.description}</div>
    </div>
  );
}
