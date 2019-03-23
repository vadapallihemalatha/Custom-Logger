import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/counterAction';

class Counter extends Component{
    render(){debugger;
        return(
            <div>
                <b className='red'>Count: {this.props.isLoading ? 'Loading...' : this.props.count}</b>
                <div>
                    <button className='mar-r-5' onClick={this.props.countUp}>Count Up</button>
                    <button onClick={this.props.countDown}>Count Down</button>
                </div>
            </div>)
    }
}

const mapStateToProps = state => {
    return{
        count: state.count,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        countUp: () => dispatch(actions.countUp(1)),
        countDown: () => dispatch(actions.countDown(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);