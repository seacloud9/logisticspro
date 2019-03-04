import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import CreateTruck  from './components/CreateTruck'
import CreateJob from './components/CreateJob'
import  { gql } from 'apollo-boost'
import 'tachyons'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' })

export const Job_QUERY = gql`
  query JobsQuery {
    Jobs{
    id
    name
    dateOfMove
    startTime
    estimatedTime
  }
}`

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

export const JobQue_QUERY = gql`
  query JobsQueQuery {
    JobQue{
      id
      date
      jobName
      jobID
      estimatedTime
      startTime
      truckID
      truckName
    }
}`
/*
export const ADDJOB_MUTATION = gql`
mutation Job($name: String!, $dateOfMove: String!, $startTime: Number!, $estimatedTime: Number!) {
  Job(name: $title, dateOfMove: $dateOfMove, startTime:$startTime, $estimatedTime:estimatedTime) {
    id
    name
    dateOfMove
    startTime
    estimatedTime
  }
}
`

export const ADDTRUCK_MUTATION = gql`
mutation Truck($name: String!, $startTime: Number!, $endTime: Number!) {
  Truck(name: $name, startTime: $startTime, endTime:$endTime) {
    id
    name
  	startTime
    endTime
    totalHours
  }
}
`
export const ADDQUE_MUTATION = gql`
mutation JobQue($dateKey: String!, $jobID: String!, $truckID: String!) {
  JobQue(dateKey: $dateKey, jobID: $jobID, truckID:$truckID) {
    id
    date
    jobName
    jobID
    estimatedTime
    startTime
    truckID
    truckName
  }
}
`
*/

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <CreateTruck />
        <CreateJob />
        </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
