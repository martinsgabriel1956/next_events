import { Container, IconContainer, Content } from './styles';

export function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Content>{props.children}</Content>
    </Container>
  );
}


