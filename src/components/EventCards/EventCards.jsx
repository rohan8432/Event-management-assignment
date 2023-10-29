import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";


const EventCards = () => {

    const [events, setEvents] = useState([]);
     
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setEvents(data))

        // console.log(events);
    },[events])
     
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12">
             {
                events.map(event => <EventCard key={event.id} event={event}></EventCard>)
             }
            </div>
        </div>
    );
};

export default EventCards;