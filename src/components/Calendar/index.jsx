import React, {useState} from 'react';
import styles from './styles.module.scss'
import CurrentDay from './CurrentDaySide';
import CurrentMonth from './CurrentMounthSide';
import { addMonths, format, subMonths, setDate} from 'date-fns';
import ContextObj from './contex';

const Calendar = () => {
    
    const [currentData, setDay] = useState(new Date());

    const nextMonth = () => {
        setDay(addMonths(currentData, 1))
    }
    const prevMonth = () => {
        setDay(subMonths(currentData, 1))
    }
    const changeDay = (day) => {
        setDay(setDate(currentData, day))
    }
    
    return (
        <ContextObj.Provider value={[currentData, changeDay]}>
        <div className={styles['calendarContainer']}>
            <CurrentDay 
            currentDay = {format(currentData, 'd') }
            currentDayOfWeek = { format(currentData, 'EEEE') }/>

            <CurrentMonth 
            currentDataObj = {currentData} 
            nextMonth = {nextMonth}
            prevMonth = {prevMonth}
            />
        </div>
        </ContextObj.Provider>
        
    );
}

export default Calendar;
