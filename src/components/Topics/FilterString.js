import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['dog', 'zebra', 'Getsu is a dog', 'seahorse', 'seazebra', 'seastar', 'Getsu'],
            userInput: '',
            filteredArray: []
        }
    }

    handleInputChange (e) {
        this.setState ({
            userInput: e
        })
    }
    
    filterArr (arr) {
        let filtered = []
        filtered = arr.filter((e, index, array) => {
            if (array[index].includes(this.state.userInput)) {
                filtered.push(array[index])
                return filtered
            }
        }) 
        // console.log(filtered)
        this.setState ({
            filteredArray: filtered
        })
    }
    
    render () {
        return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>Words: {JSON.stringify(this.state.unFilteredArray)}</span>
            <input className='inputLine' onChange={(e) => this.handleInputChange(e.target.value)} />
            <button className='confirmationButton' onClick={() => {this.filterArr(this.state.unFilteredArray)}}>Filter</button>
            <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}

export default FilterString