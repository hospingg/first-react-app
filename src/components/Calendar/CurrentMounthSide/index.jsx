import DayField from './DayField';
import styles from '../styles.module.scss'
import React, { PureComponent } from 'react';
import { format, startOfMonth, getDaysInMonth, getDay} from 'date-fns';

class CurrentMonth extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            nameOfWeeks: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            startOfMonth: startOfMonth(this.props.currentDataObj),
            daysInMonth: getDaysInMonth(this.props.currentDataObj)
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentDataObj !== this.props.currentDataObj) {
            this.setState({
                startOfMonth: startOfMonth(this.props.currentDataObj),
                daysInMonth: getDaysInMonth(this.props.currentDataObj),
            });
        }
    }


    renderCalendar() {
        const firstDayOfWeek = getDay(this.state.startOfMonth) === 0 ? 7: getDay(this.state.startOfMonth); 
        let daysArr = [];
        let currentDay = 1
        for (let i = 0; i < 6; i++) {
            daysArr[i] = []; 
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDayOfWeek) || currentDay > this.state.daysInMonth) {
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
                    {this.state.nameOfWeeks.map((name, i) => <td key = {i}><p> {name} </p> </td>)}
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

    nextMonthUpdate = () => {
        this.props.nextMonth();
    }

    prevMonthUpdate = () => {
        this.props.prevMonth();
    }


    render() {
        return (
            <div className={styles['currentDayContainer']}>
                <div className={styles['monthChanger']}>
                    <button className={styles['change-month-btn']} onClick={this.prevMonthUpdate}>{'<'}</button>
                    <p className={`${styles['side-title']} ${styles['month-text-selector']}` } >{`${format(this.props.currentDataObj, 'MMMM')} ${format(this.props.currentDataObj, 'yyy')}`}</p>
                    <button className={styles['change-month-btn']} onClick={this.nextMonthUpdate}>{'>'}</button>
                </div>
                <div className={`${styles['margin-center']} ${styles['calendarField']}` }>
                    {this.renderCalendar()}
                </div>
            </div>
        );
    }
}

export default CurrentMonth;
