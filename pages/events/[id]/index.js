import { EventSummary } from "../../../components/events/EventDetail/EventSummary";
import { EventLogistics } from "../../../components/events/EventDetail/EventLogistics";
import { EventContent } from "../../../components/events/EventDetail/EventContent";
import { ErrorAlert } from "../../../components/UI/ErrorAlert";

import { getEventById, getFeaturedEvents } from '../../../helpers/api-util';

export default function Event(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found</p>
      </ErrorAlert>
    );
  }

  const { title, date, location, image, description } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}


export async function getStaticProps (ctx) {
  const eventId = ctx.params.id;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths () {
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}