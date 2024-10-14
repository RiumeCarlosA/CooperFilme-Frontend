import { useParams } from 'react-router-dom';

export default function ScriptDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Roteiro #{id}</h1>
      <p>Informações detalhadas do roteiro...</p>
    </div>
  );
}