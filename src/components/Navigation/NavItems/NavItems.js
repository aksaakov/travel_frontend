import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul className={styles.NavItems}>
        <NavItem link="/">About Us</NavItem>
        <NavItem link="/">Contact</NavItem>
    </ul>
);

export default navItems;
