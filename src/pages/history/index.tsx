import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useCycle } from '../../contexts/cycle-context';
import { Container, HistoryList, Status } from './styles';

export function History() {
  const { cycles } = useCycle();
  return (
    <Container>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{String(cycle.minutesAmount).padStart(2, '0')} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>

                {cycle.finishedDate && (
                  <td>
                    <Status statusColor='green'>Concluído</Status>
                  </td>
                )}

                {cycle.interruptedDate && (
                  <td>
                    <Status statusColor='red'>Interrompido</Status>
                  </td>
                )}

                {!cycle.finishedDate && !cycle.interruptedDate && (
                  <td>
                    <Status statusColor='yellow'>Em andamento</Status>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </Container>
  );
}
