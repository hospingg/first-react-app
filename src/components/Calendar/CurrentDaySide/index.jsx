import React from 'react';
import styles from '../styles.module.scss'


const CurrentDay = (props) => {
    return (
        <div className={styles['currentMouthContainer']}>
            <p className={`${styles['day-of-week']} ${styles['side-title']}`}>{props.currentDayOfWeek }</p>
            <h2 className={`${styles['current-day-side']} ${styles['margin-center']}` }>{props.currentDay}</h2>
        </div>
    );
}

export default CurrentDay;
