import React, { Component } from 'react'
import CpfInput from './components/cpfInput'

class App extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleCpfChange = this.handleCpfChange.bind(this)

    this.state = {
      cpf: '',
      blacklisted: undefined,
    }
  }

  onSubmit (event) {
    event.preventDefault()
    console.log(this.state)
  }

  handleCpfChange (event) {
    event.preventDefault()
    this.setState({
      cpf: event.target.value
    })
  }


  render() {
    return (
      <div style={{ width: '80%', margin: 'auto', padding: 20}}>
        <form onSubmit={this.onSubmit}>
          <label>CPF:</label>
          <br />
          <CpfInput
            type="text"
            name="cpf"
            value={this.state.cpf}
            onChange={this.handleCpfChange}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default App
