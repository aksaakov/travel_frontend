import React, {Component} from 'react';
import TextSection from '../../components/PageComponents/TextSection/TextSection';
import TourBrowser from './TourBrowser/TourBrowser';

class MainPage extends Component {
    render () {
        return (
            <React.Fragment>
                <TextSection/>
                <TourBrowser builderRef={this.props.setRef}/>
                <div style={{height: "200px", backgroundColor: "lightgrey"}}> </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer. Orci imperdiet cras tortor himenaeos commodo elementum euismod odio maecenas varius praesent class quis, vulputate natoque porttitor condimentum suscipit tincidunt pellentesque mattis sed mauris faucibus. Feugiat ac eleifend morbi sapien mollis sodales fusce eros non proin, lobortis senectus sollicitudin dapibus dictumst litora.Lorem ipsum dolor sit amet consectetur adipiscing, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer. Orci imperdiet cras tortor himenaeos commodo elementum euismod odio maecenas varius praesent class quis, vulputate natoque porttitor condimentum suscipit tincidunt pellentesque mattis sed mauris faucibus. Feugiat ac eleifend morbi sapien mollis sodales fusce eros non proin, lobortis senectus sollicitudin dapibus dictumst litora.Lorem ipsum dolor sit amet consectetur adipiscing, elit viverra nullam bibendum lectus, ac tempus fermentum tortor integer. Orci imperdiet cras tortor himenaeos commodo elementum euismod odio maecenas varius praesent class quis, vulputate natoque porttitor condimentum suscipit tincidunt pellentesque mattis sed mauris faucibus. Feugiat ac eleifend morbi sapien mollis sodales fusce eros non proin, lobortis senectus sollicitudin dapibus dictumst litora.</p>
                <div style={{height: "200px", backgroundColor: "lightgrey"}}> </div>
            </React.Fragment>
        );
    }
}

export default MainPage;
