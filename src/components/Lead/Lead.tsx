export default function Lead({ children, className, ...props }) {
  return (
    <div className="inline-flex space-x-6 overflow-x-auto pb-4 whitespace-nowrap">
      {children}
    </div>
  );
}
