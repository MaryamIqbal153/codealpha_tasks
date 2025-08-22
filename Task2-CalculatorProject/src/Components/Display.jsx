// src/components/Display.jsx
function Display({ value }) {
  return (
    <div className="w-full bg-gray-200 text-right p-4 rounded-lg mb-4 shadow-inner text-2xl font-mono">
      {value || "0"}
    </div>
  );
}

export default Display;
