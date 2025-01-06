interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.min((current / total) * 100, 100);
  
  return (
    <div className="h-2 bg-gray-200 rounded-full flex-1">
      <div 
        className="h-full bg-[#FF3B5C] rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}