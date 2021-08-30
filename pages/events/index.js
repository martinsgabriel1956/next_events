import { useRouter } from 'next/dist/client/router';

import { getAllEvents } from '../../dummy-data';

import { EventList } from '../../components/events/EventList';
import { EventSearch } from '../../components/events/EventSearch';

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();

  function handleFindEvents(year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath);
  }
 
  return (
    <>
      <EventSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </>
  );
}