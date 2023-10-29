import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailCard from "../EventDetailCard/EventDetailCard";


const EventDetails = () => {
 
    const {id} = useParams();
    console.log(id);
   
    const [events, setEvents] = useState({});


    const EventsData = useLoaderData();
    console.log(EventsData);

    useEffect(()=>{
        const allEvents = EventsData.find(event => event.id == id)
        setEvents(allEvents);
        
    },[id, EventsData])
    
    return (
        <div>
           
            <EventDetailCard events={events}></EventDetailCard>
            
        </div>
    );
};

export default EventDetails;
