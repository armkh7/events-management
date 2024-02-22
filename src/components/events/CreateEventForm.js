// react imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

// import mutation
import { createEvents } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";

// amplify
import { useAuthenticator } from "@aws-amplify/ui-react";

function CreateEventForm() {

  const navigate = useNavigate();

  // get user data
  const { user } = useAuthenticator((context) => [context.user]);

  // define state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');

  const [createEvent, { loading, error }] = useMutation(gql(createEvents), {
    refetchQueries: [
      { query: gql(listEvents) },
      { query: gql(listEvents),  variables: { filter: { userID: { eq: user?.userId } } } },
    ]
  });

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createEvent({
        variables: {
          input: {
            userID: user?.userId,
            name,
            description,
            eventDate: new Date(eventDate).getTime(),
          },
        },
      });

      // Reset form fields
      setName('');
      setDescription('');
      setEventDate('');

    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-semibold mb-4">Create Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-md px-4 py-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-md px-4 py-2"
        />
        <input
          type="date"
          placeholder="Event Date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full border rounded-md px-4 py-2"
          min={new Date().toISOString().split('T')[0]}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading ? 'Creating...' : 'Create Event'}
        </button>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  )
}

export default CreateEventForm;
