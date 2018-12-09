import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
	<h1>{props.nimi}</h1>
)

const Sisalto = (props) => (
<div>
  <Osa nimi={props.osa1.nimi} n={props.osa1.tehtavia} />
  <Osa nimi={props.osa2.nimi} n={props.osa2.tehtavia} />
  <Osa nimi={props.osa3.nimi} n={props.osa3.tehtavia} />
</div>
)

const Osa = props => (
  <p>{props.nimi} {props.n}</p>
)

const Yhteensa = (props) => (
	<p>Yhteensä {props.n1 + props.n2 + props.n3} tehtävää</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]


  return (
    <div>
	  <Otsikko nimi={kurssi} />
	  <Sisalto osa1={osat[0]} osa2={osat[1]} osa3={osat[2]}/>
	  <Yhteensa n1={osat[0].tehtavia} n2={osat[1].tehtavia} n3={osat[2].tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)