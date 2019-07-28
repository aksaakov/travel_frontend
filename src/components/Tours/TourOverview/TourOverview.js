import React from 'react';
import styles from "./TourOverview.module.css";

const tourOverview = (props) => (
    <section className={styles.PackageInfo} hidden={!props.packageDescription}>
        <p>{props.packageDescription}</p>
    </section>
);

export default tourOverview;
