import Link from "next/link";
import { Container, ButtonAlternative } from "./styles";

export function Button({ children, ...props }) {
  return (
    <>
      {props.link ? (
        <Link href={props.link}>
          <Container>{children}</Container>
        </Link>
      ) : (
        <ButtonAlternative onClick={props.onClick}>{children}</ButtonAlternative>
      )}
    </>
  );
}
