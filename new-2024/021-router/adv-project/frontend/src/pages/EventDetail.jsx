import { useParams, Link } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  return (
    <div>
      <p>Event id is {params.eventId}</p>
      <p>
        Edit event <Link to={`/events/${params.eventId}/edit`}>edit</Link>
      </p>
    </div>
  );
};

export default EventDetail;
