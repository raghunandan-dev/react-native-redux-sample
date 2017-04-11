import React, { Component } from 'react'
import Home from './Home'
import About from './About'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
    this.userName =''
    this.formDetails={userName:'',email:'',pwd:'',mobile:''}
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return <Home
              _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'about') {
      debugger
     return <About formDetails ={this.formDetails}  />
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
  debugger
    switch (action && action.type) {
      case 'push':
          debugger
          this.formDetails.userName= action.userName;
        this.formDetails.email = action.email;
        this.formDetails.pwd = action.pwd;
        this.formDetails.mobile = action.mobile;
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene} />
      )
   }
}

export default NavRoot