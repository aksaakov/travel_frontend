import React from 'react';
import styles from './TourSelector.module.css';

const tourSelector = (props) => (
    <article className={styles.Package} onClick={props.clicked}>
        <h1>{props.title}</h1>
    </article>
);

export default tourSelector;
