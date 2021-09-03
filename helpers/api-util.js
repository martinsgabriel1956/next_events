export async function getAllEvents() {
  try {

    const res = await fetch('https://next-events-5c76b-default-rtdb.firebaseio.com/events.json');
    const data = await res.json();

    const events = [];

    for(const key in data) {
      events.push({
        id: key,
        ...data[key]
      });
    }

    return events;

  } catch(err) {
    console.error(err);
  }

}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}