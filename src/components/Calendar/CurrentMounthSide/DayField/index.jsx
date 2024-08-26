import React, { useContext, useEffect, useMemo, useState }  from 'react';
import styles from '../../styles.module.scss'
import Context from '../../contex' 
import {format} from 'date-fns';

const DayField = (props) => {

    const [currentDay, changeDay] = useContext(Context);
 
    const changeDayHandler = () => {
        changeDay(props.day)
    }
    const [isCurrentDay, setCurrentDay] = useState(false)

    const memoIsCurrentDay = useMemo(() => props.day.toString() === format(currentDay, 'd') ? true : false, 
    [currentDay, props.day])

    useEffect(() => setCurrentDay(memoIsCurrentDay), [memoIsCurrentDay])

    useEffect(()=> console.log('re-render', props.day.toString()), [])
    return(
        <p className={` ${isCurrentDay ? styles['currentDay'] : null} ${styles['day-btn']}`} 
        onClick={changeDayHandler}>{props.day}</p>
    )
}



export default DayField;


