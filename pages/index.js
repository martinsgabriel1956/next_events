import { EventList } from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home(props) {
  const { events } = props;

  return (
    <>
      <EventList 
        events={events}
      />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}