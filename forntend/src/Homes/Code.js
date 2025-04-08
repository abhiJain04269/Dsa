import { useState } from "react";
import { Clipboard } from "lucide-react";

export default function Code({ fetchCode }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-[80%] mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-black">
        Code Implementation
      </h2>
      {fetchCode.map((val, index) => (
        <div key={index} className="relative my-2">
          <button
            onClick={() => handleCopy(val, index)}
            className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-lg text-xs flex items-center gap-1 hover:bg-gray-700"
          >
            <Clipboard size={14} />
            {copiedIndex === index ? "Copied!" : "Copy"}
          </button>
          <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-lg border border-gray-700 overflow-x-auto">
            {val}
          </pre>
        </div>
      ))}
    </div>
  );
}
