import React, {Component} from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems';
import headerPic from '../../../assets/Images/headerImage2.jpg';
import ScrollContext from '../../../context/scroll-context';
import { Parallax } from "react-parallax";


class Toolbar extends Component {
    static contextType = ScrollContext;
    scrollToBuilder = () => {
        if(this.context) {
            window.scrollTo(0, this.context.offsetTop)
        }
    };

    render () {

        return (
            <header>
                <Parallax bgImage={headerPic} bgStyle={{position: 'absolute'}} bgImageStyle={{backgroundPosition: 'center'}} strength={130} style={{height: '450px'}}>
                <div className={styles.ToolbarBackground}>
                    <div className={styles.headerImage}> </div>
                    <div className={styles.Logo + " " + styles.DesktopOnly}>
                        <Logo />
                    </div>
                    <div className={styles.MidSection}>
                        <h1>VISIT MOLDOVA</h1>
                        <h2>We will help you cherry-pick the perfect tour.</h2>
                        <div className={styles.buttonContainer}>
                            <button onClick={this.scrollToBuilder} className={styles.Button} style={{backgroundColor: '#FFFF', color: 'black'}}>Select a package</button>
                            <button className={styles.Button}>See our tours</button>
                        </div>
                    </div>
                    <nav className={styles.DesktopOnly}>
                        <NavItems/>
                    </nav>
                </div>
                </Parallax>
            </header>
        );
    }
}

export default Toolbar;
