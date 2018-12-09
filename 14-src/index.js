import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({ arr, index }) => (
  <div>
    {arr[index]}
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
	  index: 0,
	  max: 0,
	  len: anecdotes.length,
	  votes: new Array(anecdotes.length).fill(0)
    }
  }
  


  klik = (next) => {
    return () => {
      this.setState({  selected : next })
    }
  }
  
   vote = (n) => {
    return () => {
	  let votes2 = {...this.state.votes}
	  votes2[n]++;
      this.setState({ 
	  votes : votes2,
	  max : this.indexOfMax(votes2,this.state.len)
	  })
    }
  }
  
  
  indexOfMax = (arr,n) =>{
    if(n<0) {
		return -1
	}
    let max = arr[0]
    let maxIndex = 0
	let i=1

    for (; i < n; i++) {
        if (arr[i] > max) {
            maxIndex = i
            max = arr[i]
        }
    }

    return maxIndex;
  }

  render() {
	  
	const random = (n) => {
		return Math.floor(Math.random()*n)
	}
    return (
      <div>

        <Anecdote arr={anecdotes} index={this.state.selected} />
		<br/>
		{this.state.selected} has {this.state.votes[this.state.selected]} votes
		<br/>
		<Button text="vote" handleClick={this.vote(this.state.selected)}/><Button text="next anecdote" handleClick={this.klik(random(anecdotes.length))}/>
		<h3>Anecdote with most votes:</h3> 
		<Anecdote arr={anecdotes} index={this.state.max} />
			{this.state.max}
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)