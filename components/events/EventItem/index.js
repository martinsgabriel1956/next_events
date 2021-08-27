import Link from "next/link";

import {
  Container,
  Content,
  DateContainer,
  Summary,
  Address,
  Actions,
} from "./styles";

export function EventItem(props) {
  const { title, image, date, location, id } = props;

  let dateFormatted = new Date(date);

  const humanReadableDate = dateFormatted.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <Container>
      <img src={`/${image}`} alt="" />
      <Content>
        <Summary>
          <h2>{title}</h2>
          <DateContainer>
            <time>{humanReadableDate}</time>
          </DateContainer>
          <Address>
            <address>{formattedAddress}</address>
          </Address>
        </Summary>
        <Actions>
          <Link href={exploreLink}>Explore Event</Link>
        </Actions>
      </Content>
    </Container>
  );
}
