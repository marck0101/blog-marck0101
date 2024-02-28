/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
// Fullcalendar
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/locales/pt-br' // arquivo de localização para português

import { useRef } from 'react'

const Calendario = () => {
  const calendarRef = useRef()
  const [mesSelected, setMesSelected] = React.useState('')

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div>
        <h1 style={{ fontSize: 28, marginBottom: -40 }}>{mesSelected}</h1>

        <FullCalendar
          //@ts-ignore
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            right: 'prev,next',
            left: '', // Deixe vazio para remover a parte esquerda do cabeçalho
            center: '', // Deixe vazio para remover a parte central do cabeçalho
          }}
          initialView="dayGridMonth"
          eventLimit={true}
          editable={false}
          selectable={true}
          selectMirror={true}
          weekends={true}
          // events={dataTrips.map((trip) => {
          //   //@ts-ignore
          //   const color = buscaCor(trip?.vehicle);
          //   return {
          //     id: trip?._id,
          //     title: trip?.name,
          //     start: trip?.startDate,
          //     end: ajustaDataEndTrip(trip?.endDate),
          //     className: 'cursor-pointer ',
          //     color: color ? color : '#077c07',
          //     textColor: getHexContrastYIQ(color),
          //   };
          // })}
          // select={handleDateSelect} // click na data, cadastro rápido
          // eventClick={handleEventClick} // abre detalhes da viagem
          dayMaxEvents={6} // Mostra até 6 viagens antes de aparecer ver mais
          eventLimitText="+2 mais" // Custom text for the "more events" link
          locale="pt-br" // idioma para português brasileiro
          datesSet={(arg) => {
            const monthTitle = arg.view.title
            const formattedMonthTitle = capitalizeFirstLetter(monthTitle)
            setMesSelected(formattedMonthTitle)
          }}
        />
      </div>
    </>
  )
}
export default Calendario
