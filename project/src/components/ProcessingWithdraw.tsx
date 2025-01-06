export function ProcessingWithdraw() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-bold mb-4">Processando saque...</h1>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#FF3B5C] animate-[loading_5s_linear]" />
        </div>
      </div>
    </div>
  );
}