import { useRouter } from 'next/dist/client/router';

import { getAllEvents } from '../../helpers/api-util';

import { EventList } from '../../components/events/EventList';
import { EventSearch } from '../../components/events/EventSearch';

export default function Events(props) {
  const router = useRouter();
  
  const { events } = props;

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

export async function getStaticProps () {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  }
}