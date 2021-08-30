import Link from 'next/link';
import { Container } from "./styles";

export function Button({children, ...props}) {
  return <Link href={props.link}>
    <Container>{children}</Container>
  </Link>;
}
