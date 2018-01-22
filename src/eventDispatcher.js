import Dispatchor, { NestedDispatchor } from 'dispatchor'
import React, { Component } from 'react'

export createReducerFromObject from './createReducerFromObject'
export dispatchorRouterRedux from './dispatchorRouterRedux'
export createEventDispatcherMiddleWare from './dispatchorRouterRedux'

export default function eventDispatcherHoC({
  rootDispatcher = new Dispatchor(),
}){
  
  return function eventDispatcher(OriginalComponent, options = {}){
    
    const {
      parentDispatcher = rootDispatcher,
      eventDispatcherProp = 'eventDispatcher',
    } = options
      
    class EventDispatcherHoC extends Component{
      constructor(props){
        super(props)
        this.eventDispatcher = new NestedDispatchor(parentDispatcher, {
          autoEnable: false
        })
      }
      componentWillMount (){
        this.eventDispatcher.enable()
      }
      componentWillUnmount (){
        this.eventDispatcher.disable()
      }
      render(){
        const props = {
          [eventDispatcherProp]: this.eventDispatcher,
          ...this.props
        }
        return (
          <OriginalComponent {...props} />
        )
      }
    }
      
    return EventDispatcherHoC
    
  }
  
}
