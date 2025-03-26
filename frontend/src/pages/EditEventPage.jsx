import { useRouteLoaderData } from "react-router-dom"
import EventForm from '../components/EventForm.jsx'
export default function EditEventPage(){
    const data = useRouteLoaderData('event-details')
    console.log(data)
    return(
        <EventForm method={'patch'} event={data}/>
    )
}