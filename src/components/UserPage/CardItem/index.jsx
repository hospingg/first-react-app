import React from 'react';
// import styles from "../style.module.css"
import styles from "../style.module.scss"
import { countries } from 'country-flag-icons'
import { format } from "date-fns";



const CardItem = (props) => {
    return (
        <article className={styles.card}>
            <div className={`${styles['main-info']} ${styles.flex}`}>
                <img className = {styles['user-img']} src={props.picture} alt={props.name + props.lastName}></img>
                {/* <i className={`fa-solid fa-star ${styles['fa-solid']}`}></i> */}
                <img className={styles["nat-flag", 'fa-solid']} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.national}.svg`} alt={props.national} />
            </div>
            <div className={styles.flex}>
                <h3 className={styles['name-age']}>{`${props.name} ${props.lastName}, ${props.age}`}</h3>
                
                <p className={styles.birthday}>
                    <i className= {`fa-solid fa-cake-candles ${styles['fa-solid']}`}></i>
                    {format(new Date(props.date), "yyyy-MM-dd")}</p>

                <p className={styles.location}>
                    <i className={`fa-solid fa-location-dot ${styles['fa-solid']}`}></i>
                    {props.state}</p> 


                <p className={styles.email}><i className= {`fa-solid fa-envelope ${styles['fa-solid']}`}></i>
                    {props.email}</p>
                
            </div>

        </article>
    );
}

export default CardItem;
