import { Calendar } from 'react-big-calendar';

import { Navbar } from "../components/Navbar"
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES, localizer } from '../../helpers';


const events = [
    {
        title: "Nombre del evento",
        notes: "Hay que comprar pastel",
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: "Jose"
        }
    },
    {
        title: "Nombre del evento",
        notes: "Hay que comprar pastel",
        start: addHours(new Date(), 5),
        end: addHours(new Date(), 7),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: "Jose"
        }
    }
]



export const CalendarPage = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {

        console.log({ event, start, end, isSelected });


        const style = {
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '0px',
            opacity: isSelected ? 1 : 0.5
        }


        return { style }

    }


    return (
        <>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 100px)' }}
                culture='es'
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
            />

        </>
    )
}
