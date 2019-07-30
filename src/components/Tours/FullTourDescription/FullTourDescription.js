import React, { Component } from 'react';
import axios from 'axios';
import styles from './FullTourDescription.module.css';

class FullTourDescription extends Component {
    state = {
        loadedTourDetails: null
    };

    componentDidUpdate () {
        console.log(this.props.id);
        if (this.props.id) {
            if (!this.state.loadedTourDetails || this.state.loadedTourDetails && this.state.loadedTourDetails.id !== this.props.id) {
                axios.get('/tours/' + this.props.id + '/')
                    .then(response => {
                        console.log(response);
                        this.setState({loadedTourDetails: response.data});
                    });
            }
        }
    }

    render () {
        let tour = <p style={{textAlign: 'center'}}>No tour selected.</p>;
        if (this.props.id) {
            let tour = <p style={{textAlign: 'center'}}>Loading</p>;
        }
        if(this.state.loadedTourDetails){
            tour = (
                <div className={styles.TourDescription} style={{ transform: this.props.show ? 'translateY(0)' : "translateY(-100vh)", display: this.props.show ? '' : 'none'}}>
                    <h1>{this.state.loadedTourDetails.title}</h1>
                    <p>{this.state.loadedTourDetails.body}</p>
                    <div style={{height: "400px", backgroundColor: "lightgrey"}}> </div>
                    <button onClick={this.props.closeFullTour}>close</button>
                </div>
            );
        }
        return tour;
    }
}

export default FullTourDescription;
