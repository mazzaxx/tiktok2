import { useState } from 'react';
import { SurveyOption } from './SurveyOption';

interface SurveyQuestionProps {
  question: string;
  options: Array<{
    icon: string;
    label: string;
  }>;
  onSubmit: () => void;
}

export function SurveyQuestion({ question, options, onSubmit }: SurveyQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div className="max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">{question}</h2>
      <p className="text-center text-gray-600 mb-6">Selecione uma opção para continuar:</p>
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <SurveyOption
            key={index}
            icon={option.icon}
            label={option.label}
            selected={selectedOption === index}
            onSelect={() => setSelectedOption(index)}
          />
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={selectedOption === null}
        className="w-full bg-[#FF3B5C] text-white py-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff2c4f] transition-colors"
      >
        Continuar
      </button>

      <p className="text-center text-green-600 mt-4">
        Concorra a um bônus adicional
      </p>
    </div>
  );
}