import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = {
        total: 0,
        counters : []
    }

    addCounter = () =>{
        const nameValue = document.getElementById("counter_name").value;
        document.getElementById("counter_name").value = "";
        document.getElementById("addCounterButton").disabled = true;
        this.setState({total: this.state.total + 1,counters: [...this.state.counters,{id: this.state.total + 1 , value: 0 , name: nameValue}]});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    incrementCount = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    decrementCount = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }
    onInput = () => {
        if(document.getElementById("counter_name").value.length === 0) {
            document.getElementById("addCounterButton").disabled = true;
        }
        else {
            document.getElementById("addCounterButton").disabled = false;
            document.getElementById("addCounterButton").onclick = this.addCounter;
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onIncrement={this.incrementCount}
                        onDecrement={this.decrementCount}
                        onDelete={this.handleDelete}
                        counter={counter}
                    />
                ))}
                <input onChange={this.onInput} style={{margin: 10}} type="text" ref="counter_name" id="counter_name" />
                <button disabled={true} id="addCounterButton" style={{margin: 10}} onClick={this.addCounter} className="btn btn-secondary btn-sm">Add</button>
            </div>
         );
    }
}
 
export default Counters;