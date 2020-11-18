import React, {Component} from 'react'

class Sum extends Component {
    
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleInputOne (userInput) {
        this.setState ({
            number1: parseInt(userInput, 10)
        })
    }
    
    handleInputTwo (e) {
        this.setState ({
            number2: parseInt(e, 10)
        })
    }

    addNums (num1, num2) {
        let total = num1 + num2
        this.setState ({
            
            sum: total
        })
    }

    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(userInput) => this.handleInputOne(userInput.target.value)} />
                <input className ='inputLine' onChange={(e) => this.handleInputTwo(e.target.value)}/>
                <button className='confirmationButton' onClick={() => {this.addNums(this.state.number1, this.state.number2)}}>Add</button>
                <span className='resultsBox'>Total: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum