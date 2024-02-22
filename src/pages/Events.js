import { Fragment } from "react";

import { useQuery, gql } from "@apollo/client";
import { listEvents } from "../graphql/queries";

// components
import EventItem from "../components/events/EventItem";

function Events() {

  // get all events
  const { loading, error, data } = useQuery(gql(listEvents));

  return(
    <div className="container pt-4 bg-white drop-shadow-md max-w-2xl py-4 px-4 mx-auto rounded">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {!loading && !error && (
        <Fragment>
          {data.listEvents.items.length === 0 ? (
            <p>There are no events created yet</p>
          ) : (
            data.listEvents.items.map(event => (
              <EventItem key={event.id} event={event} />
            ))
          )}
        </Fragment>
      )}
    </div>
  )
}

export default Events;
