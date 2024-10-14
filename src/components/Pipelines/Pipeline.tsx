export function PipelineRoot({ children }) {
    return (
      <div className="w-full p-6 bg-gray-100 rounded-md shadow-md">
        {children}
      </div>
    );
}
  
export function PipelineHeader({ children }) {
    return (
        <h2 className="text-xl font-semibold mb-4 text-blue-700">
        {children}
        </h2>
    );
}
  
export function PipelineContent({ children }) {
    return (
        <div className="space-y-6">
        {children}
        </div>
    );
}   