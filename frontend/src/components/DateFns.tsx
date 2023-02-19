import React from 'react'
import {format} from 'date-fns'
import add from 'date-fns/add'

function DateFns() {
    const todayIs = format(new Date(), "'Today is a' eeee")
    const todaysDate = format(new Date(),'MM/dd/yyyy')
    const thirtyDaysFromToday = format(add(new Date(), {days:30}), 'MM/dd/yyyy')
  return (
    <div>
        <h4 className='text-light'>{todayIs}</h4>
        <h4 className='text-light'>Todays Date - {todaysDate}</h4>
        <h4 className='text-light'>30 days from now - {thirtyDaysFromToday}</h4>
    </div>
  )
}

export default DateFns