import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'

type Event = {
    title: string
    start: Date
    end: Date
}

type Messages = {
    date: string
    time: string
    event: string
    allDay: string
    week: string
    work_week: string
    day: string
    month: string
    previous: string
    next: string
    yesterday: string
    tomorrow: string
    today: string
    agenda: string
    noEventsInRange: string
    showMore: (total: number) => string
}

export default function App(): JSX.Element {
    const localizer = momentLocalizer(moment)
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        const myEventsList: Event[] = [
            {
                title: 'Cortar cabelo',
                start: new Date('Wed Mar 14 2023 23:30:00 GMT-0300 (Hora padrão de Brasília)'),
                end: new Date('Wed Mar 14 2023 23:30:00 GMT-0300 (Hora padrão de Brasília)')
            },
            {
                title: 'Lavar cabelo',
                start: new Date('Wed Mar 15 2023 23:30:00 GMT-0300 (Hora padrão de Brasília)'),
                end: new Date('Wed Mar 15 2023 23:30:00 GMT-0300 (Hora padrão de Brasília)')
            }
        ]
        setEvents(myEventsList)
    }, [])

    const handleSelect = (eventItem: { start: Date; end: Date }): void => {
        const title = window.prompt('New Event name')
        if (title) {
            const data = { title: title, start: eventItem.start, end: eventItem.end }
            setEvents((events) => [...events, data])
            console.log(data)
        }
    }

    const defaultMessages: Messages = {
        date: 'Data',
        time: 'Hora',
        event: 'Evento',
        allDay: 'All Day',
        week: 'Semana',
        work_week: 'Work Week',
        day: 'Dia',
        month: 'Mês',
        previous: 'Voltar',
        next: 'Próximo',
        yesterday: 'Ontem',
        tomorrow: 'Amanhã',
        today: 'Hoje',
        agenda: 'Agenda',
        noEventsInRange: 'Não há eventos neste intervalo.',
        showMore: function showMore(total: number): string {
            return `+${total} mais`
        }
    }

    return (
        <div>
            <Calendar
                selectable
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelect}
                onSelectEvent={(event: Event): void => alert(event.title)}
                defaultView={Views.WEEK}
                defaultDate={new Date()}
                style={{ height: 500 }}
                messages={defaultMessages}
            />
        </div>
    )
}
