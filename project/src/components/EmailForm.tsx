import { useState } from 'react';

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="max-w-md w-full mx-auto text-center">
      <h1 className="text-2xl font-bold mb-2">
        Você foi convidado por um amigo e ganhou R$ 100,00
      </h1>
      <p className="text-gray-600 mb-4">
        Conclua a pesquisa e ganhe até R$ 850,00 em recompensas.
      </p>
      <p className="text-[#FF3B5C] mb-6">Restrito a uma participação por usuário.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FF3B5C] text-white py-3 rounded-md font-medium hover:bg-[#ff2c4f] transition-colors"
        >
          Entrar
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        Ao participar das atividades de recompensa, você concorda com nossos{' '}
        <a href="#" className="underline">Termos e Condições</a>.
      </p>
    </div>
  );
}