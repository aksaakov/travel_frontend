import React from 'react';
import styles from "./TourPackageOverview.module.css";

const tourPackageOverview = (props) => (
    <section className={styles.PackageInfo} hidden={!props.packageDescription}>
        <p>{props.packageDescription}</p>
    </section>

);

export default tourPackageOverview;
