import { Container } from './styles';

export function EventSummary(props) {
  const { title } = props;

  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

