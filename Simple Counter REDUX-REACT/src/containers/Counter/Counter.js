import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';

import { ADDITION, ADDRESULT, DECREMENT, DELETERESULT, INCREMENT, SUBTRACTION } from '../../Store/action/index';

import './Counter.css';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.crt} />
                <CounterControl label="Increment" clicked={() => this.props.INC()} />
                <CounterControl label="Decrement" clicked={() => this.props.DEC()}  />
                <CounterControl label="Add 10" clicked={() => this.props.ADD(10)}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.SUB(10)}  />
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
        INC: ()=>dispatch(INCREMENT()),
        DEC: ()=>dispatch(DECREMENT()),
        ADD: (val)=>dispatch(ADDITION(val)),
        SUB: (val)=>dispatch(SUBTRACTION(val)),
        ADDRESULT: ()=>dispatch(ADDRESULT()),
        DELETERESULT: (id)=>dispatch(DELETERESULT(id))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);