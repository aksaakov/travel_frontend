import React from 'react';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        {/*<img src={logo} alt="MyLogo"/>*/}
        LOGO
    </div>
);

export default logo;
