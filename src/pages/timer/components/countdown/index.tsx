import { useEffect, useState } from 'react';
import { Container, Separator } from './styles';
import { differenceInSeconds } from 'date-fns';
import { useCycle } from '../../../../contexts/cycle-context';

export function Countdown() {
  const { activeCycle, finishedCycle } = useCycle();

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle?.id) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeCycle?.id) {
      document.title = `Ignite Timer: ${minutes}:${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  useEffect(() => {
    let cycleInterval: number;

    if (activeCycle?.id) {
      cycleInterval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

        if (secondsDifference > totalSeconds) {
          finishedCycle();
          clearInterval(cycleInterval);
        } else {
          setAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(cycleInterval);
    };
  }, [activeCycle, totalSeconds, finishedCycle]);

  return (
    <Container>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Container>
  );
}
