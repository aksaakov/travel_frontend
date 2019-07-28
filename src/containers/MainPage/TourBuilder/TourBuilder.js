import React, {Component} from 'react';
import styles from './TourBuilder.module.css';
import Tours from '../../../components/Tours/Tours';

class TourBuilder extends Component {
    render() {
        return(
            <React.Fragment>
                <div ref={this.props.builderRef} className={styles.TourBuilder}>
                    <p style={{textAlign: 'center', color: 'white', fontSize: '17px', margin: '0 0 15px 0'}}>{'1. Select a package.'}</p>
                    <Tours/>
                </div>
            </React.Fragment>
        );
    }
}

export default TourBuilder;
