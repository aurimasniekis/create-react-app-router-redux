import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {mainActions} from "../../redux/modules/main";

class MainPage extends Component {
    static propTypes = {
        click: PropTypes.func.isRequired,
        count: PropTypes.number.isRequired,
    };

    static defaultProps = {
        click: () => {},
        count: -1,
    };


    render() {
        return <div>
            <h1>Count: {this.props.count}</h1>

            <button onClick={this.props.click}>Increase</button>

        </div>
    }
}

const mapStateToProps = (state) => ({
    count: state.main.count,
});

const mapDispatchToProps = {
    click: mainActions.mainClick
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
