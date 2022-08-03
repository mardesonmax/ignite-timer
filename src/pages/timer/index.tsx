import { NewCycleForm } from './components/new-cycle-form';
import { Container, StartCountdownButton } from './styles';
import { Play } from 'phosphor-react';
import { Countdown } from './components/countdown';

export function Timer() {
  return (
    <Container>
      <form>
        <NewCycleForm />

        <Countdown />

        <StartCountdownButton type='submit'>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </Container>
  );
}
