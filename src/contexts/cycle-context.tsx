import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions';
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';

type Props = {
  children: ReactNode;
};

type NewCycleData = {
  task: string;
  minutesAmount: number;
};

type CycleContextType = {
  cycles: Cycle[];
  activeCycle?: Cycle;
  createNewCycle(data: NewCycleData): void;
  interruptCycle(): void;
  finishedCycle(): void;
};

const CycleContext = createContext({} as CycleContextType);

export function CycleProvider({ children }: Props) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycle: undefined,
    },
    () => {
      const storedStateCycle = localStorage.getItem('@ignite-timer:cycles-state');

      if (storedStateCycle) {
        return JSON.parse(storedStateCycle);
      }
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem('@ignite-timer:cycles-state', stateJSON);
  }, [cyclesState]);

  const { cycles, activeCycle } = cyclesState;

  function createNewCycle(data: NewCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
  }

  function interruptCycle() {
    dispatch(interruptCurrentCycleAction());

    document.title = `Ignite Timer`;
  }

  function finishedCycle() {
    dispatch(markCurrentCycleAsFinishedAction());

    document.title = `Ignite Timer`;
  }

  const value = {
    cycles,
    activeCycle,
    createNewCycle,
    interruptCycle,
    finishedCycle,
  };

  return <CycleContext.Provider value={value}>{children}</CycleContext.Provider>;
}

export const useCycle = () => useContext(CycleContext);
