import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import border from "../../assets/Images/border.jpg";

class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <Toolbar/>
                <main className={styles.Content}>{this.props.children}</main>
                <div className={styles.border} style={{backgroundImage: "url(" + border + ")", position: "sticky", zIndex: "100"}}> </div>
            </React.Fragment>
        );
    }
}
export default Layout;
