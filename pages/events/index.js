import { getAllEvents } from '../../dummy-data';
import { EventList } from '../../components/events/EventList';

export default function Events() {
  const events = getAllEvents();

  return (
    <>
      <EventList events={events} />
    </>
  );
}