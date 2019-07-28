import React, { Component } from 'react';
import styles from './Tours.module.css';
import PackageSelector from './TourSelector/TourSelector';
import TourOverview from './TourOverview/TourOverview';

class Tours extends Component {
    state = {
        tours: [
            {
                id: 1,
                title: 'The Pilgrim',
                description: 'Lorem ipsum dolor sit The Pilgrim adipiscing, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer.',
            },
            {
                id: 2,
                title: 'The Wine Taster',
                description: 'Lorem ipsum dolor sit amet The Wine Taster, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer.',
            },
            {
                id: 3,
                title: 'The Business Traveler',
                description: 'Lorem ipsum dolor sit amet consectetur The Business Traveler, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer.',
            },
            {
                id: 4,
                title: 'The Generalist',
                description: 'Lorem ipsum dolor sit amet The Generalist adipiscing, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer.',
            },
            {
                id: 5,
                title: 'The Adrenaline Junkie',
                description: 'Lorem ipsum dolor sit amet consectetur The Adrenaline Junkie, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer.',
            },
        ],
        selectedTourId: null,

    };

    selectTour = (id) => {
        this.setState({selectedTourId: id});
    };

    render () {
        const pkgTypes = this.state.tours.map(pkg => {
            return <PackageSelector title={pkg.title} key={pkg.id} clicked={() => this.selectTour(pkg.id)}/>
        });

        let pkgDescription = null;

        if(this.state.selectedTourId){
            pkgDescription = this.state.tours.find(el => el.id === this.state.selectedTourId);
        }
        return (
            <div>
                <section className={styles.PackagesWrapper}>
                    {pkgTypes}
                </section>
                <TourOverview packageDescription={pkgDescription !== null ? pkgDescription.description : null}/>
            </div>
        );
    }
}


export default Tours;
