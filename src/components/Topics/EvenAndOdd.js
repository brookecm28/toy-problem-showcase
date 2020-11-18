import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userinput: ''
        }
    }

    handleInputChange (e) {
        this.setState ({
            userInput: e
        })
    }
    
    assignEvenandOdds (userInput) {
        let arr = userInput.split(',')
        let evens = []
        let odds = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            }
            else if (arr[i] % 2 !== 0) {
                odds.push(parseInt(arr[i]))
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
        // console.log(this.state.evenArray)
        // console.log(this.state.oddArray)
    }

    render () {
        return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input className='inputLine' onChange={(e) => this.handleInputChange(e.target.value)} />
            <button className='confirmationButton' onClick={() => {this.assignEvenandOdds(this.state.userInput)}}>Split</button>
            <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>     
            <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>               
        </div>
        
        )
    }
}

export default EvenAndOdd