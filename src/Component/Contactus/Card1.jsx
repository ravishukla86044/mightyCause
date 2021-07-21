
import React from 'react'
import styles from './Contactus.module.css';


export default function Card1(props) {
    return (
        <>
            <div className={styles["card"]}>
                <div className={styles["card-title"]}>
                    <p>{props.title}</p>
                </div>
                <div className={styles["card-description"]}>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

    