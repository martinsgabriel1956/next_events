import { EventItem } from "../EventItem";

import { Container } from './styles';

export function EventList(props) {
  const { events } = props;

  return (
    <Container>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </Container>
  );
}
