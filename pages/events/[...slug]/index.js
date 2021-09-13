import { useEffect, useState } from "react";
import useSWR from "swr";

import { useRouter } from "next/dist/client/router";

import { EventList } from "../../../components/events/EventList";
import { ResultsTitle } from "../../../components/events/ResultsTitle";
import { Button } from "../../../components/UI/Button";
import { ErrorAlert } from "../../../components/UI/ErrorAlert";

import { getFilteredEvents } from "../../../helpers/api-util";

export default function AllEvents() {
  const [loadedEvents, setLoadedEvents] = useState(any);
  const router = useRouter();

  const filteredData = router.query.slug;

  const { data, error } = useSWR(
    "https://next-events-5c76b-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) return <div className="center">Loading ...</div>;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  const invalidFieldDate =
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numMonth > 2030 ||
    numMonth > 12 ||
    numMonth < 1 ||
    error;

  if (invalidFieldDate) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  // const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
        ;
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}
