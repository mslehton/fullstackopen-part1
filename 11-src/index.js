import React from 'react';
import ReactDOM from 'react-dom';

	
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ hyva,neutraali,huono,summa}) => {
  if (summa>0) {
	return(
		<table>
		<tbody>
		 <tr><th colSpan="2">Statistiikka</th></tr>
		  <Statistic teksti="Hyvä" arvo={hyva}/>
		  <Statistic teksti="Neutraali" arvo={neutraali}/>
		  <Statistic teksti="Huono" arvo={huono}/>
		  <Statistic teksti="Keskiarvo" arvo={((hyva-huono)/summa).toFixed(1)}/>
		  <Statistic teksti="Positiivisia" arvo={(hyva*100/summa).toFixed(1)+" %" }/>
		</tbody>
        </table>
		)
  }
  return( 
    <br/>
  )
}

const Statistic = props => (
	<tr><td>{props.teksti}</td><td>{props.arvo}</td></tr>
)


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
	  huono: 0
    }
  }


  klik = (muuttuja,arvo) => {
    return () => {
      this.setState({  [muuttuja] : arvo })
    }
  }
  

  render() {
	const summa = () => {
		return this.state.hyva+this.state.neutraali+this.state.huono
	}
	
    return (
      <div>
        <div>
		<h3>Anna palautetta</h3>
		
        <Button
          handleClick={this.klik("hyva",this.state.hyva + 1)}
          text="hyva"
        />		
        <Button
          handleClick={this.klik("neutraali",this.state.neutraali + 1)}
          text="neutraali"
        />
        <Button
          handleClick={this.klik("huono",this.state.huono + 1)}
          text="huono"
        />		
		  <br/>
		</div>
		<br/>
		<Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} summa={summa()}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)