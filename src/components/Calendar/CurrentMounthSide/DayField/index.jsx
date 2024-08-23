import React  from 'react';
import styles from '../../styles.module.scss'
import Context from '../../contex' 
import {format} from 'date-fns';



const DayField = (props) => {
    return (
        <Context.Consumer>
            {
                ([contextDay, changeDay]) => {
                    const changeDayHandler = () =>{
                        changeDay(props.day)
                    }
                    return(
                        <p className={` ${props.day.toString() === format(contextDay, 'd') ? styles['currentDay'] : null} ${styles['day-btn']}`} 
                        onClick={changeDayHandler}>{props.day}</p>
                    )
                }
            }
        </Context.Consumer>
    );
}

export default DayField;


