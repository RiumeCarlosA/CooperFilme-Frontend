export function LeadCardRoot({ children, className, ...props }) {
    return (
      <div className="border p-4 rounded-lg mb-4 bg-white shadow-lg transition transform hover:scale-105">
        {children}
      </div>
    );
  }
  
  export function LeadCardHeader({ children, className, ...props }) {
    return (
      <div className="flex justify-between items-center border-b pb-2 mb-2 text-lg font-bold text-gray-800">
        {children}
      </div>
    );
  }
  
  export function LeadCardContent({ children, className, ...props }) {
    return (
      <div className="text-sm text-gray-600 space-y-2">
        {children}
      </div>
    );
  }
  
  export function LeadCardFooter({ children, className, ...props }) {
    return (
      <div className="pt-2 mt-2 border-t text-gray-500 text-xs">
        {children}
      </div>
    );
  }