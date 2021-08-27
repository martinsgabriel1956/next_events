import { EventItem } from "../EventItem";
import "./styles.css";

export function EventList(props) {
  const { events } = props;

  return (
    <ul>
      {events.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}
