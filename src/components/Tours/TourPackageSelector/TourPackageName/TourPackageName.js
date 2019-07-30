import React from 'react';
import styles from './TourPackageName.module.css';

const tourPackageName = (props) => (
    <article className={styles.Package} onClick={props.clicked}>
        <h1>{props.title}</h1>
    </article>
);

export default tourPackageName;
