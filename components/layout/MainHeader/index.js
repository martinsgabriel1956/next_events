import Link from "next/link";

import { Container, LogoContainer, Navigation } from "./styles";

export function MainHeader() {
  return (
    <Container>
      <LogoContainer>
        <Link href="/">NextEvents</Link>
      </LogoContainer>
      <Navigation>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
