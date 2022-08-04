import { HandPalm, Play } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCycle } from '../../contexts/cycle-context';
import { Countdown } from './components/countdown';
import { NewCycleForm } from './components/new-cycle-form';
import { Container, StartCountdownButton, StopCountdownButton } from './styles';

export type NewCycleFormData = {
  task: string;
  minutesAmount: number;
};

export function Timer() {
  const { activeCycle, createNewCycle, interruptCycle } = useCycle();

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  function handleInterruptCycle() {
    interruptCycle();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        {activeCycle ? (
          <p>
            Você esta trabalhar em: <b>{activeCycle.task}</b> por{' '}
            <b>{activeCycle.minutesAmount} </b> minutos
          </p>
        ) : (
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
        )}

        <Countdown />

        {activeCycle?.id ? (
          <StopCountdownButton type='button' onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type='submit' disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </Container>
  );
}
