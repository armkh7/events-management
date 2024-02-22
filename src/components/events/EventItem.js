import { useMutation, useQuery, gql } from "@apollo/client";
import { deleteEvents } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";

// helper functions
import { truncateDescription } from "../../helpers/eventsHelper";

function EventItem({ event, showDeleteButton }) {

  // event data
  const { id, name, description, eventDate, createdAt } = event;

  // delete mutation
  const [deleteEvent] = useMutation(gql(deleteEvents));

  // Function to refetch the listEvents
  const { refetch } = useQuery(gql(listEvents), {
    variables: { filter: { userID: { eq: event.userID } } }
  });

  // handleDelete
  const handleDelete = async () => {
    try {
      await deleteEvent({
        variables: {
          input: {
            id: id
          }
        },
        refetchQueries: [{ query: gql(listEvents) }]
      });

      // Refetch listEvents after delete
      await refetch();

    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="my-4 border rounded p-4 mb-2">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{truncateDescription(description, 100)}</p>
      <p className="text-gray-500 mb-2">Event Date: {new Date(eventDate).toLocaleDateString()}</p>
      <p className="text-gray-500">Created At: {new Date(createdAt).toLocaleString()}</p>
      {showDeleteButton && (
        <div className="flex justify-end">
          <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-md mt-2">
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default EventItem;
