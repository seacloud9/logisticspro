import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import PropTypes from 'prop-types'
import TimeSelect from './TimeSelect'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

export const Truck_QUERY = gql`
  query TrucksQuery {
    Trucks{
    id
    name
    startTime
    endTime
    totalHours
  }
}`

export const ADDTRUCK_MUTATION = gql`
mutation Truck($name: String!, $startTime: Int!, $endTime: Int!) {
  Truck(name: $name, startTime: $startTime, endTime:$endTime) {
    id
    name
  	startTime
    endTime
    totalHours
  }
}
`

export default class CreateTruck extends Component {
    static propTypes = {
        name: PropTypes.string,
        startTime: PropTypes.number,
        endTime: PropTypes.number,
        onChange: PropTypes.func
    }

    static defaultProps = {
        name: null,
        onChange: (value) => console.log(value)
    }
 
    state = {
        truckName:'',
        startTime:null,
        endTime:null
    }

    handleChangeText = (event) => {
      this.setState({name: event.target.value})
    }
    
  render() {
    return (
      <Mutation
      mutation={ADDTRUCK_MUTATION}
      update={(cache, { data }) => {
        this.setState({name:'', startTime:null, endTime:null})
      }}
    >
      {(Truck, { data, loading, error }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
            return (
              <div style={{display: 'flex', flex:1, flexDirection:'column'}}>
              <Card>
                <CardContent>
                <form 
                 id='truckForm'
                 autoComplete="off" 
                 onSubmit={async e => {
                  e.preventDefault()
                  const { name, startTime, endTime } = this.state
                  await Truck({
                    variables: { name, startTime, endTime },
                  })
                }}
              >
                <FormControl>
                <TextField 
                   id="Truck"
                   label="Truck"
                   value={this.state.name}
                   onChange={this.handleChangeText}
                   margin="normal"
                   variant="filled"
                />
                <TimeSelect ID={'startTime'} onChange={value => this.setState({startTime:value})} />
                <TimeSelect ID={'endTime'} onChange={value => this.setState({endTime:value})}  />
                <Button variant="contained" type="submit" size="small">Create Truck</Button>
                </FormControl>
                </form>
                </CardContent>
              </Card>
              </div>
            )
        }}
        </Mutation> 
    )
  }
}
