import React, {Component} from 'react';
import TextSection from '../../components/PageComponents/TextSection/TextSection';
import TourBuilder from './TourBuilder/TourBuilder';

class MainPage extends Component {
    render () {
        return (
            <React.Fragment>
                <TextSection/>
                <TourBuilder builderRef={this.props.setRef}/>
                <div style={{height: "1000px"}}> </div>
            </React.Fragment>
        );
    }
}

export default MainPage;
