import { useRouter } from "next/router";

import { getEventById } from "../../../dummy-data";
import { EventSummary } from "../../../components/events/EventDetail/EventSummary";
import { EventLogistics } from "../../../components/events/EventDetail/EventLogistics";
import { EventContent } from "../../../components/events/EventDetail/EventContent";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const event = getEventById(id);

  if (!event) {
    return <p>Event not found</p>;
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
