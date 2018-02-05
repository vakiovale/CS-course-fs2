import React from 'react'
import countryService from '../services/countries'

const Country = ({ country }) => {
  if(country === null) {
    return null
  }
  return (
    <div> 
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <p>
        <img src={country.flag} />
      </p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      activeCountry: null,
      filter: '',
    }
  }

  refresh() {
    countryService
      .getAll()
      .then(response => {
        console.log(response.data)
        this.setState({ countries: response.data })
      })
  }

  componentWillMount() {
    console.log('will mount')
    this.refresh()
  }

  showCountry = (country) => {
    console.log(country)
    this.setState({ activeCountry: country })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
    this.setState({ activeCountry: null })
  }

  render() {
    return (
      <div>
        <div>
          find country: <input value={this.state.filter} onChange={this.handleFilterChange} />
        </div>
        <Country country={this.state.activeCountry} />
        <div>
          <ul>
            {this.state.countries
              .filter(country => 
                country.name.match(new RegExp(this.state.filter, "i")) !== null)
              .map(country => 
                <li key={country.numericCode} onClick={() => this.showCountry(country)}>{country.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App