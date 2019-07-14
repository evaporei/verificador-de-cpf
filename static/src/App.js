import React, { Component } from 'react'
import axios from 'axios'
import CpfInput from './components/cpfInput'

class App extends Component {
  constructor (props) {
    super(props)
    this.onSend = this.onSend.bind(this)
    this.onCheck = this.onCheck.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.onCpfChange = this.onCpfChange.bind(this)
    this.getStatus = this.getStatus.bind(this)

    this.state = {
      cpf: '',
      blacklisted: undefined,
      message: ''
    }
  }

  onSend () {
    const { cpf } = this.state
    axios.post('/v1/cpf', { cpf })
      .then((response) => {
        const { blacklisted } = response.data
        const message = `CPF ${cpf} foi adicionado à lista negra.`
        this.setState({ blacklisted, message })
      })
      .catch((error) => {
        const { status } = error.response
        let message = 'Ocorreu um erro ao tentar enviar o CPF.'
        if (status === 400) message = 'CPF inválido.'
        return this.setState({ message })
      })
  }

  onCheck () {
    const { cpf } = this.state
    axios.get(`/v1/cpf?cpf=${cpf}`)
      .then((response) => {
        const { blacklisted } = response.data
        this.setState({ blacklisted, message: '' })
      })
      .catch((error) => {
        const { status } = error.response
        let message = 'Ocorreu um erro ao tentar checar o CPF.'
        if (status === 400) message = 'CPF inválido.'
        return this.setState({ message })
      })
  }

  onRemove () {
    const { cpf } = this.state
    axios.delete(`/v1/cpf?cpf=${cpf}`)
      .then((response) => {
        const { blacklisted } = response.data
        const message = `CPF ${cpf} foi removido da lista negra.`
        this.setState({ blacklisted, message })
      })
      .catch((error) => {
        const { status } = error.response
        let message = 'Ocorreu um erro ao tentar remover o CPF.'
        if (status === 400) message = 'CPF inválido.'
        return this.setState({ message })
      })
  }

  onCpfChange (event) {
    event.preventDefault()
    const { value } = event.target
    this.setState({ cpf: value, blacklisted: undefined, message: '' })
  }

  getStatus () {
    const { blacklisted } = this.state
    if (blacklisted === true) return 'BLOCK'
    if (blacklisted === false) return 'FREE'
    return ''
  }

  render() {
    const { cpf, message } = this.state

    return (
      <div style={{ width: '80%', margin: 'auto', padding: 20}}>
        <label>CPF:</label>
        <br />
        <CpfInput
          type="text"
          name="cpf"
          value={cpf}
          onChange={this.onCpfChange}
        />
        <br />
        <button onClick={this.onCheck}>Checar</button>
        <button onClick={this.onSend}>Adicionar</button>
        <button onClick={this.onRemove}>Remover</button>
        <p>{ this.getStatus() }</p>
        <p>{ message }</p>
      </div>
    )
  }
}

export default App
