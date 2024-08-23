import React, { Component } from 'react';
import styles from './styles.module.scss'
import CurrentDay from './CurrentDaySide';
import CurrentMonth from './CurrentMounthSide';
import { addMonths, format, subMonths, setDate} from 'date-fns';
import ContextObj from './contex';

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentData: new Date(),
        }
    }
    nextMonth = () => {
        this.setState(
            {
                currentData: addMonths(this.state.currentData, 1)
            })
    }
    prevMonth = () => {
        this.setState(
            {
                currentData: subMonths(this.state.currentData, 1)
            })
    }
    changeDay = (day) =>{
        this.setState({
            currentData:  setDate(this.state.currentData, day)
        })
    }

    render() {
        return (
            <ContextObj.Provider value={[this.state.currentData, this.changeDay]}>
            <div className={styles['calendarContainer']}>
                <CurrentDay 
                currentDay = {format(this.state.currentData, 'd') }
                currentDayOfWeek = { format(this.state.currentData, 'EEEE') }/>

                <CurrentMonth 
                currentDataObj = {this.state.currentData} 
                nextMonth = {this.nextMonth}
                prevMonth = {this.prevMonth}
                />
            </div>
            </ContextObj.Provider>
            
        );
    }
}

export default Calendar;
