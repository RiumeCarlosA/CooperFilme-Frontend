import Lead from "../../components/Lead/Lead";
import { LeadCardContent, LeadCardFooter, LeadCardHeader, LeadCardRoot } from "../../components/LeadCard/LeadCard";
import { PipelineContent, PipelineHeader, PipelineRoot } from "../../components/Pipelines/Pipeline";

const PIPELINE_MOCKS = [
    { title: 'Aguardando Análise' },
    { title: 'Em Análise' },
    { title: 'Aguardando Revisão' },
    { title: 'Em Revisão' },
    { title: 'Aguardando Aprovação' },
    { title: 'Em Aprovação' },
    { title: 'Aprovado' },
    { title: 'Recusado' },
];

export default function ScriptControl() {
    return (
        <div className="flex flex-col space-y-8 p-8 bg-gray-100 min-h-screen">
          {PIPELINE_MOCKS.map((item, index) => (
            <PipelineRoot key={index}>
              <PipelineHeader>{item.title}</PipelineHeader>
              <PipelineContent>
                <Lead>
                  {[...Array(3)].map((_, idx) => (
                    <LeadCardRoot key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                      <LeadCardHeader>
                        <span className="font-bold text-gray-800">Roteiro {idx + 1}</span>
                        <span className="text-xs bg-blue-100 text-blue-600 py-1 px-2 rounded-full ml-auto">
                          {item.title}
                        </span>
                      </LeadCardHeader>
                      <LeadCardContent>
                        <p className="text-gray-600"><strong>Cliente:</strong> Cliente {idx + 1}</p>
                        <p className="text-gray-600"><strong>Responsável:</strong> Nome do Usuário</p>
                        <p className="text-gray-600"><strong>Data de Envio:</strong> {new Date().toLocaleDateString()}</p>
                      </LeadCardContent>
                      <LeadCardFooter>
                        <p className="text-gray-500 italic">Outras informações relevantes do roteiro...</p>
                      </LeadCardFooter>
                    </LeadCardRoot>
                  ))}
                </Lead>
              </PipelineContent>
            </PipelineRoot>
          ))}
        </div>
    );
}
