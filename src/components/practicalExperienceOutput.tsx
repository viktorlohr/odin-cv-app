import type { PracticalExperience } from "../types";
import EntryListOutput from "./entryListOutput";

interface PracticalExperiencesOutputProps {
  experiences: PracticalExperience[];
}

export default function PracticalExperiencesOutput({
  experiences,
}: PracticalExperiencesOutputProps) {
  const props = {
    entries: experiences,
    renderEntry: renderPracticalExperience,
  };

  return (
    <div className="practicalExperiences">
      <EntryListOutput<PracticalExperience> {...props} />
    </div>
  );
}

function renderPracticalExperience(experience: PracticalExperience) {
  const props: PracticalExperienceOutputProps = { experience };
  return <PracticalExperienceOutput {...props} />;
}

interface PracticalExperienceOutputProps {
  experience: PracticalExperience;
}

function PracticalExperienceOutput(props: PracticalExperienceOutputProps) {
  return (
    <div className="practicalExperience">
      <div className="description">{props.experience.description}</div>
    </div>
  );
}
