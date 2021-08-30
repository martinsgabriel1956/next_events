import { useRouter } from "next/dist/client/router";
import { getFilteredEvents } from "../../../dummy-data";

export default function AllEvents() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if(!filteredData) return <div className="center">Loading ...</div>

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  const invalidFieldDate = isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numMonth > 2030|| numMonth > 12 || numMonth < 1;

  if(invalidFieldDate) return <div className="center">Invalid filter. Please adjust your values!</div>
  

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filteredEvents || filteredEvents.length === 0) return <div className="center">No events found for the chosen filter!</div>

  return (
    <h1>AllEvents</h1>
  );
}