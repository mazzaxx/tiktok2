import { ProgressBar } from './ProgressBar';

interface HeaderProps {
  balance: number;
}

export function Header({ balance }: HeaderProps) {
  return (
    <div className="flex items-center justify-between w-full mb-8">
      <div className="flex gap-2">
        <div className="bg-gray-100 px-4 py-2 rounded-md font-medium">
          R${balance.toFixed(2)}
        </div>
        <button className="bg-[#FF3B5C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#ff2c4f] transition-colors">
          SACAR
        </button>
      </div>
      <div className="flex-1 mx-8">
        <ProgressBar current={balance} total={850} />
      </div>
    </div>
  );
}