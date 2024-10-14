import { PipelinesSearchBar } from "./PipelinesSearchBar";
import { PipelinesSelect } from "./PipelinesSelect";

export default function PipelinesActions() {
  return (
    <div className="flex gap-x-4 mb-8 items-center">
      <PipelinesSearchBar />
      <PipelinesSelect />
    </div>
  );
}