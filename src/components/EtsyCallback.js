import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import qs from 'query-string'
import request from '../helpers/request'

class CallbackEtsy extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
    console.log(qs.parse(this.props.location.search))
    request('/auth/etsy/token', 'post', qs.parse(this.props.location.search))
    .then(response => {
      this.setState({loading: false})
    })

  }
  render(){
    if(this.state.loading){
      return <div>Loading...</div>
    }
    else{
      return <Redirect to='/settings' />
    }
  }
}

export default CallbackEtsy
