import React, {Component} from 'react'

class Palindrome extends Component {
    
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }
    
    handleInputChange (e) {
        this.setState ({
            userInput: e
        })
    }

    checkPalindrome (string) {
      let newArr = []
      for (let i = string.length - 1; i > -1; i--) {
        newArr.push(string[i])
      }
    //   console.log(newArr)
      let newStr = newArr.join('')
    //   console.log(newStr)
      if (newStr === string) {
        //   console.log('yep')
          this.setState ({
              palindrome: 'true'
          })
      } else {
        //   console.log('nope')
          this.setState ({
              palindrome: 'false'
          })
      }
    }

    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrdome</h4>
                <input className='inputLine' onChange={(e) => this.handleInputChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => {this.checkPalindrome(this.state.userInput)}}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome