import React, { Component } from 'react';
import styles from './TourDestination.module.css';

class TourDestinationTile extends Component {

    render() {
        return (
        <div>
            <article className={styles.DestinationTile} onClick={this.props.clicked}>
                <img className={styles.TileImage} strength={50} src={this.props.tileImage} alt="no image"/>
                <h3 style={{margin: '5px'}}>{this.props.title}</h3>
                <p className={styles.TileDescription}>{this.props.description}</p>
            </article>
        </div>
        );
    }
}

export default TourDestinationTile;
