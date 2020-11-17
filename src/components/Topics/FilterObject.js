import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Kai',
                    age: 4,
                    color: 'grey',
                    faveGirl: 'Brooke',
                }, 
                {
                    nickname: 'Getsu',
                    age: 4,
                    eyeColor: 'amber',
                    faveGirl: 'Leah'
                },
                {
                    name: 'Tucker',
                    nickname: 'Tuck Tuck',
                    age: 1,
                    faveGirl: 'Cheryl'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInputChange (e) {
        this.setState ({
            userInput: e
        })

    }

    handleFilter (userInput) {
        let filtered = []
        for (let i = 0; i < this.state.unFilteredArray.length; i++) {
            for (let key in this.state.unFilteredArray[i]) {
                if (key === userInput) {
                    filtered.push(this.state.unFilteredArray[i])
                }
            }
        }
        this.setState ({
            filteredArray: filtered
        })
        console.log(this.state.filteredArray)
    }

    render () {
        return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
            <input className='inputLine' onChange={(e) => this.handleInputChange(e.target.value)} />
            <button className='confirmationButton'onClick={() => (this.handleFilter(this.state.userInput))}>Filter</button>
            <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}

export default FilterObject