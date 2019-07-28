import React, {Component} from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import MainPage from "./containers/MainPage/MainPage";
import ScrollContext from './context/scroll-context';


class App extends Component {
    constructor(props) {
        super(props);
        this.builderRef = null;
    }
    state = {
        builderRef: null
    };

    setRef = (ref) => {
        setTimeout(() => {
            this.setState({builderRef: ref});
        }, 3000);
    };

    render() {
        return (
            <React.Fragment>
                <ScrollContext.Provider value={this.state.builderRef}>
                    <Layout>
                        <MainPage {...this.props} setRef={this.setRef}/>
                    </Layout>
                </ScrollContext.Provider>
            </React.Fragment>
        );
    }
}

export default App;
