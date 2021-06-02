import React from 'react';
import useCalendar from '../pages/useCalendar';

const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
      <div class="container">
            <div class="calendar">
                <div class="month">
                  <i class="fas fa-angle-left prev" onClick={getPrevMonth}></i>
                    <div class="date">
                      <h1>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</h1>
                   </div>
                 <i class="fas fa-angle-right next" onClick={getNextMonth}></i>
               </div>
               <div className="space">
                  <table className="tab">
                      <thead>
                          <tr>
                              {daysShort.map(day => (
                              <th key={day}>{day}</th>
                              ))}
                          </tr>
                      </thead>
                      <tbody>
                        {
                          Object.values(calendarRows).map(cols => {
                            return <tr key={cols[0].date}>
                              {cols.map(col => (
                                col.date === todayFormatted
                                  ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                    {col.value}
                                  </td>
                                  : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                              ))}
                            </tr>
                          })
                        }
                      </tbody>
                    </table>
                </div>
            </div>
        </div> 
     );
}

export default Calendar;