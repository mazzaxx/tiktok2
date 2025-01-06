interface RewardModalProps {
  reward: number;
  onContinue: () => void;
  onWithdraw?: () => void;
  showWithdrawButton?: boolean;
  isLastQuestion?: boolean;
}

export function RewardModal({ reward, onContinue, onWithdraw, showWithdrawButton, isLastQuestion }: RewardModalProps) {
  const containerClass = isLastQuestion ? 'bg-[#9333EA]' : 'bg-white border-2';
  const textClass = isLastQuestion ? 'text-white' : 'text-gray-900';
  const rewardClass = isLastQuestion ? 'text-yellow-300' : 'text-[#FF3B5C]';
  const buttonClass = isLastQuestion 
    ? 'bg-white text-[#9333EA] hover:bg-gray-100'
    : 'bg-[#FF3B5C] text-white hover:bg-[#ff2c4f]';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
      <div className={`${containerClass} p-8 rounded-lg text-center max-w-sm w-full mx-4 shadow-xl`}>
        <h3 className={`text-lg ${textClass}/90 mb-2`}>Nova recompensa</h3>
        <p className={`text-2xl font-bold ${textClass} mb-2`}>Você ganhou</p>
        <p className={`text-4xl font-bold ${rewardClass} mb-4`}>
          R${reward.toFixed(2)}
        </p>
        <p className={`${textClass}/90 mb-6`}>
          Clique no botão abaixo para {showWithdrawButton ? 'sacar suas recompensas' : 'continuar'}
        </p>
        {showWithdrawButton ? (
          <button
            onClick={onWithdraw}
            className={`w-full ${buttonClass} py-3 rounded-md font-medium transition-colors`}
          >
            Sacar meu dinheiro
          </button>
        ) : (
          <button
            onClick={onContinue}
            className={`w-full ${buttonClass} py-3 rounded-md font-medium transition-colors`}
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}