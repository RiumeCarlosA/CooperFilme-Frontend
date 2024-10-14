import PipelinesActions from "./PipelinesActions";

export default function PipelinesRoot({ children }) {
  return (
    <div className="p-8 bg-gray-100 min-h-screen rounded-lg">
      <PipelinesActions />
      <div className="flex flex-wrap gap-6">{children}</div>
    </div>
  );
}
