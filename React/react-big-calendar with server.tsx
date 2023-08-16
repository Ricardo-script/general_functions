import { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/pt-br'
import './App.css'
import axios from "axios";


export default function App() {

    const localizer = momentLocalizer(moment);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const lerDados = async () => {
            await axios.get('http://localhost:1337/api/agendas')
                .then(res => {
                    const data = [];
                    res.data.data.forEach((registers, index) => {
                        data.push({ id: res.data.data[index].id, title: res.data.data[index].attributes.title, start: new Date(res.data.data[index].attributes.start), end: new Date(res.data.data[index].attributes.end) })
                    });
                    setEvents(data);
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        lerDados()
    }, []);

    const handleSelect = (eventItem) => {
        const title = window.prompt("New Event name");
        if (title) {
            const data = { title: title, start: eventItem.start, end: eventItem.end };
            setEvents((events) => [...events, data]);
            saveData(data)
        }
    };

    const saveData = async (data) => {
        await axios.post('http://localhost:1337/api/agendas', {
            data: {
                title: data.title,
                start: String(new Date(data.start)),
                end: String(new Date(data.end))
            }
        }).then(res => {
            alert('salvo com sucesso')
        }).catch('algo deu errado')
    }

    const defaultMessages = {
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
        showMore: function showMore(total) {
            return "+" + total + " mais";
        }

    };

    return (
        <div>
            <Calendar
                selectable
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelect}
                onSelectEvent={(event) => alert(event.id + ' : ' + event.title)}
                defaultView={Views.WEEK}
                defaultDate={new Date()}
                style={{ height: 500 }}
                messages={defaultMessages}
            />
        </div>
    );
}