import { truncateDescription } from "../../helpers/eventsHelper";

function EventItem({ event }) {

  // event data
  const { name, description, eventDate, createdAt } = event;

  return (
    <div className="my-4 border rounded p-4 mb-2">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{truncateDescription(description, 100)}</p>
      <p className="text-gray-500 mb-2">Event Date: {new Date(eventDate).toLocaleDateString()}</p>
      <p className="text-gray-500">Created At: {new Date(createdAt).toLocaleString()}</p>
    </div>
  )
}

export default EventItem;
