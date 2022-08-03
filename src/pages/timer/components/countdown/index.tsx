import { Container, Separator } from './styles';

export function Countdown() {
  return (
    <Container>
      <span>{0}</span>
      <span>{0}</span>
      <Separator>:</Separator>
      <span>{0}</span>
      <span>{0}</span>
    </Container>
  );
}
