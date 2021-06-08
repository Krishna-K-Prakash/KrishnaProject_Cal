import React, {useState} from 'react';
import useCalendar from '../pages/useCalendar';
import Popup from '../components/popup';

const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

  const [popupOnClick,setPopupOnClick] = useState(false);
  
  return(
      <div className="container">
            <div className="calendar">
                <div className="month">
                  <i className="fas fa-angle-left prev" onClick={getPrevMonth}></i>
                    <div className="date">
                      <span>{`${monthNames[selectedDate.getMonth()]}`}</span>
                       <span>{`${selectedDate.getFullYear()}`}</span>
                   </div>
                 <i className="fas fa-angle-right next" onClick={getNextMonth}></i>
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
                                  ? <td key={col.date} className={`${col.classes} today`} onClick={() => setPopupOnClick('true')}>
                                    {col.value}
                                  </td>
                                  : <td key={col.date} className={col.classes} onClick={() => setPopupOnClick('true')} >
                                    {col.value}
                                    </td>
                              ))}
                            </tr>
                          })
                        }
                      </tbody>
                    </table>
                    <Popup trigger = {popupOnClick} setTrigger={setPopupOnClick} />
                </div>
            </div>
        </div> 
     );
}

export default Calendar;