import { useQuery, gql } from "@apollo/client";
import { listEvents } from "../graphql/queries";

// amplify
import { useAuthenticator } from "@aws-amplify/ui-react";

// components
import EventItem from "../components/events/EventItem";

function UserEvents() {

  // get user
  const { user } = useAuthenticator((context) => [context.user]);

  // get user events
  const { loading, error, data } = useQuery(gql(listEvents), {
    variables: { filter: { userID: { eq: user?.userId } } },
  })

  return (
    <div className="container pt-4 bg-white drop-shadow-md max-w-2xl py-4 px-4 mx-auto rounded">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {!loading && !error && (
        <>
          {data.listEvents.items.length === 0 ? (
            <p>You have not created any event yet</p>
          ) : (
            data.listEvents.items.map(event => (
              <EventItem key={event.id} event={event} showDeleteButton={true} />
            ))
          )}
        </>
      )}
    </div>
  )
}

export default UserEvents;
