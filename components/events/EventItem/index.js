import {
  Container,
  Content,
  DateContainer,
  Summary,
  Address,
  Actions,
  IconContainer
} from "./styles";

import { Button } from "../../UI/Button";
import { DateIcon } from "../../UI/icons/date-icon";
import { ArrowRightIcon } from "../../UI/icons/arrow-right-icon";
import { AddressIcon } from "../../UI/icons/address-icon";

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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </DateContainer>
          <Address>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </Address>
        </Summary>
        <Actions>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <IconContainer>
              <ArrowRightIcon />
            </IconContainer>
          </Button>
        </Actions>
      </Content>
    </Container>
  );
}
