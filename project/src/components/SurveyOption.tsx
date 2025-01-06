interface SurveyOptionProps {
  icon: string;
  label: string;
  selected?: boolean;
  onSelect: () => void;
}

export function SurveyOption({ icon, label, selected, onSelect }: SurveyOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center justify-between p-4 border rounded-md cursor-pointer transition-colors ${
        selected 
          ? 'border-[#FF3B5C] bg-[#FF3B5C]/5' 
          : 'border-gray-200 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        selected ? 'border-[#FF3B5C] bg-[#FF3B5C]' : 'border-gray-300'
      }`}>
        {selected && (
          <div className="w-2 h-2 bg-white rounded-full" />
        )}
      </div>
    </button>
  );
}