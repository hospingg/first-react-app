import DayField from './DayField';
import styles from '../styles.module.scss'
import React, {useState, useEffect } from 'react';
import { format, startOfMonth, getDaysInMonth, getDay} from 'date-fns';

const CurrentMonthFunc = (props) => {

    const [startOfMonthNum, setStartOfMonth] = useState(startOfMonth(props.currentDataObj))
    const [daysInMonth, setdaysInMonth] = useState(props.currentDataObj)
    const nameOfWeeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    useEffect(() => {
        setStartOfMonth(startOfMonth(props.currentDataObj))
        setdaysInMonth(getDaysInMonth(props.currentDataObj))
    }, [props.currentDataObj])


    const renderCalendar = () => {
        const firstDayOfWeek = getDay(startOfMonthNum) === 0 ? 7: getDay(startOfMonthNum); 
        let daysArr = [];
        let currentDay = 1
        for (let i = 0; i < 6; i++) {
            daysArr[i] = []; 
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDayOfWeek) || currentDay > daysInMonth) {
                    daysArr[i][j] = null;
                } else {
                    daysArr[i][j] = currentDay++;

                }
            }
        }

        return(
            <table>
                <tbody>
                    <tr>
                    {nameOfWeeks.map((name, i) => <td key = {i}><p> {name} </p> </td>)}
                    </tr>
                    {daysArr.map((week) =>
                        <tr key = {week}>
                            {week.map((day, i) => 
                            <td key={i}>
                                {
                                    day === null ? null : <DayField day = {day}> </DayField> 
                                }
                                
                            </td>
                            )}
                        </tr>
                     )}
                </tbody>
            </table>
            
        )
    }

    const nextMonthUpdate = () => {
        props.nextMonth();
    }

    const prevMonthUpdate = () => {
        props.prevMonth();
    }

    return (
        <div className={styles['currentDayContainer']}>
            <div className={styles['monthChanger']}>
                <button className={styles['change-month-btn']} onClick={prevMonthUpdate}>{'<'}</button>
                <p className={`${styles['side-title']} ${styles['month-text-selector']}` } >{`${format(props.currentDataObj, 'MMMM')} ${format(props.currentDataObj, 'yyy')}`}</p>
                <button className={styles['change-month-btn']} onClick={nextMonthUpdate}>{'>'}</button>
            </div>
            <div className={`${styles['margin-center']} ${styles['calendarField']}` }>
                {renderCalendar()}
            </div>
        </div>
    );
}

export default CurrentMonthFunc;
