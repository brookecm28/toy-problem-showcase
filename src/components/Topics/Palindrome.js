import React, {Component} from 'react'

class Palindrome extends Component {
    
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }
    
    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrdome</h4>
                <input className='inputLine' />
                <button className='confirmationButton'>Check</button>
                <span className='resultsBox'></span>
            </div>
        )
    }
}

export default Palindrome