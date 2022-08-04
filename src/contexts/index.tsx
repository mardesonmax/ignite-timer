import { ReactNode } from 'react';
import { CycleProvider } from './cycle-context';

type Props = {
  children: ReactNode;
};

export function Contexts({ children }: Props) {
  return <CycleProvider>{children}</CycleProvider>;
}
