import { ProgressBar } from './ProgressBar';

interface HeaderProps {
  balance: number;
  onWithdraw: () => void;
}

export function Header({ balance, onWithdraw }: HeaderProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Section */}
      <div className="flex items-center justify-center w-full mb-2 gap-4">
        {/* TikTok Logo */}
        <div className="flex items-center">
          <img
            src="/tiktok.svg" // Caminho da logo TikTok no diretório público
            alt="TikTok Logo"
            className="w-13 h-11"
          />
        </div>

        {/* Balance and Withdraw Button */}
        <div className="flex items-center gap-2">
          <div className="px-4 py-1 border rounded-md text-black font-semibold">
            R${balance.toFixed(2)}
          </div>
          <button
            onClick={onWithdraw}
            className="bg-red-500 text-white px-4 py-1 rounded-md font-bold hover:bg-red-600"
          >
            SACAR
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-300 mb-2" />

      {/* Progress Bar */}
      <div className="w-full max-w-lg">
        <ProgressBar current={balance} total={100} />
      </div>
    </div>
  );
}
