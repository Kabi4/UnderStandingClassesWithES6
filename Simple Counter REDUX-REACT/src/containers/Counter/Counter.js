import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';

import * as actionTypes from './../../Store/actionTypes';

import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.crt} />
                <CounterControl label="Increment" clicked={() => this.props.INC()} />
                <CounterControl label="Decrement" clicked={() => this.props.DEC()}  />
                <CounterControl label="Add 10" clicked={() => this.props.ADD()}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.SUB()}  />
                <hr/>
                <button onClick={this.props.ADDRESULT}>Store Result</button>
                <ul>
                    {this.props.result.map((ele,i)=>{
                        return(
                            <li className="items" key={i} onClick={()=>{this.props.DELETERESULT(i)}}>{ele}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        crt: state.counter,
        result: state.result
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        INC: ()=>dispatch({type: actionTypes.INCREMENT_EVENT}),
        DEC: ()=>dispatch({type: actionTypes.DECREMENT_EVENT}),
        ADD: ()=>dispatch({type: actionTypes.ADDITION_EVENT,payload:{value:10}}),
        SUB: ()=>dispatch({type: actionTypes.SUBTRACTION_EVENT,payload:{value:10}}),
        ADDRESULT: ()=>dispatch({type: actionTypes.ADDRESULT_EVENT}),
        DELETERESULT: (id)=>dispatch({type: actionTypes.DELETERESULT_EVENT,payload:{id: id}})
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);