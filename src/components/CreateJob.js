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

export const ADDJOB_MUTATION = gql`
mutation Job($name: String!, $dateOfMove: String!, $startTime: Int!, $estimatedTime: Int!) {
  Job(name: $name, dateOfMove: $dateOfMove, startTime:$startTime, estimatedTime:$estimatedTime) {
    id
    name
    dateOfMove
    startTime
    estimatedTime
  }
}
`



export default class CreateJob extends Component {
 
    state = {
        name:'',
        dateOfMove:'',
        startTime:null,
        estimatedTime:null
    }
    
  render() {
    return (
      <Mutation
      mutation={ADDJOB_MUTATION}
      update={(cache, { data }) => {
        this.setState({name:'', dateOfMove:null, startTime:null, estimatedTime:null})
      }}
    >
      {(Job, { data, loading, error }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
            return (
              <div style={{display: 'flex', flex:1, flexDirection:'column'}}>
              <Card>
                <CardContent>
                <form 
                 id='jobForm'
                 autoComplete="off" 
                 onSubmit={async e => {
                  e.preventDefault()
                  const { name, dateOfMove, startTime, estimatedTime } = this.state
                  await Job({
                    variables: { name, dateOfMove, startTime, estimatedTime  },
                  })
                }}
              >
                <FormControl>
                <TextField 
                   id="Job"
                   label="Job Name"
                   value={this.state.name}
                   onChange={(event) => this.setState({name:event.target.value})}
                   margin="normal"
                   variant="filled"
                />
                <TextField 
                   id="dateOfMove"
                   label="Date of Move"
                   value={this.state.dateOfMove}
                   onChange={(event) => this.setState({dateOfMove:event.target.value})}
                   margin="normal"
                   variant="filled"
                />
                <TimeSelect ID={'startTime'} onChange={value => this.setState({startTime:value})} />
                <TextField 
                   id="estimatedTime"
                   label="Estimate of Time"
                   value={this.state.estimatedTime}
                   onChange={(event) => this.setState({estimatedTime:parseInt(event.target.value)})}
                   margin="normal"
                   variant="filled"
                />
                <Button variant="contained" type="submit" size="small">Create Job</Button>
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
