import React, { Component, useState } from "react"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    increment1() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    increment2() {
        this.setState({
            count: this.state.count + 2
        })
        console.log(this.state.count)
    }

    increment3() {
        this.setState({
            count: this.state.count + 3
        })
        console.log(this.state.count)
    }

    increment4() {
        this.setState({
            count: this.state.count + 4
        })
        console.log(this.state.count)
    }

    increment5() {
        this.setState({
            count: this.state.count + 5
        })
        console.log(this.state.count)
    }


    handleChange(event) {
        this.setState({
            count: parseInt(event.target.value)
        });
    }


    render() {
        return (
            <div>
                <button onClick={()=>this.increment1()}>Decrease</button>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment1()}>Increment</button>
                {//<input type="number" value={this.state.count} onChange={this.handleChange}></input>
                }
            </div>
        )
    }
}

export default Counter