import React, {Component} from 'react';
// import io from "socket.io-client";
// import PropTypes from 'prop-types';
// import Read from './read';
// import Auth from '../auth';
// const FontAwesome = require('react-fontawesome');



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "hello"
        };
    }

    render() {
        return (
            <div className="home">
                <p>Home</p>
            </div>
        );
    }
}

// Home.propTypes = {
//     history: PropTypes.object.isRequired
// };

export default Home;
