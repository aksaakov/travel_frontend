import React, {Component} from 'react';
import styles from './TourBrowser.module.css';
import TourPackageSelector from '../../../components/Tours/TourPackageSelector/TourPackageSelector';
import TourDestinationTile from '../../../components/Tours/TourDestinationTile/TourDestinationTile';
import TourDescription from '../../../components/Tours/FullTourDescription/FullTourDescription';
import axios from "axios";

class TourBrowser extends Component {
    state = {
        tours: [],
        error: false,
        selectedTourId: null,
        fullDescriptionShow: false,
    };

    componentDidMount() {
        axios.get('/tours/')
            .then(response => {
                const tours = response.data;
                const updatedTours = tours.map(tour => {
                    return {
                        ...tour,
                    }
                });
                this.setState({tours: updatedTours});
            })
            .catch(() => {
                this.setState({error: true});
                console.log('error');
            });
    };

    tourDisplayHandler = (id) => {
        this.setState({selectedTourId: id, fullDescriptionShow: true});

    };

    closeTourDescription = () => {
        this.setState({fullDescriptionShow: false});
    };

    render() {
        let tours = <p style={{textAlign: 'center'}}> Could not load the tour destinations. </p>;
        if(!this.state.error) {
            tours = this.state.tours.map(tour => {
                return <TourDestinationTile
                    key={tour.id}
                    title={tour.location_title}
                    description={tour.description}
                    tileImage={tour.image}
                    clicked={() => this.tourDisplayHandler(tour.id)}/>
            });
        }
        return(
            <React.Fragment>
                <div ref={this.props.builderRef} className={styles.TourBrowser}>
                    <TourPackageSelector/>
                </div>
                <section className={styles.Destinations} style={{display: this.state.fullDescriptionShow ? 'none' : ''}}>
                    {tours}
                </section>
                <TourDescription id={this.state.selectedTourId} show={this.state.fullDescriptionShow} closeFullTour={this.closeTourDescription}/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer. Orci imperdiet cras tortor himenaeos commodo elementum euismod odio maecenas varius praesent class quis, vulputate natoque porttitor condimentum suscipit tincidunt pellentesque mattis sed mauris faucibus. Feugiat ac eleifend morbi sapien mollis sodales fusce eros non proin, lobortis senectus sollicitudin dapibus dictumst litora.</p>

            </React.Fragment>
        );
    }
}

export default TourBrowser;
