import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
                <span style={{fontSize: 16}}>{this.props.counter.name}: </span><span style={{fontSize: 16}} className={this.getBatchClasses()}>{this.formatCount()}</span>
                <button style={{margin: 10}} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm">Increment</button>
                <button style={{margin: 10}} disabled={!this.props.counter.value} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-danger btn-sm">Decrement</button>
                <button style={{margin: 10}} onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-dark btn-sm">Delete</button>
            </div>
        );
    }
    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    } 
    getBatchClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;