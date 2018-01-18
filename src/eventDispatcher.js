import Dispatchor, { NestedDispatchor } from 'dispatchor'
import React, { Component } from 'react'


export default function({
  rootDispatcher = new Dispatchor(),
  store
}){
  
  return function eventDispatcher(OriginalComponent, options = {}){
    
    const {
      parentDispatcher = rootDispatcher,
      eventDispatcherProp = 'eventDispatcher',
      debug = false,
    } = options
    
      
    class EventDispatcherHoC extends Component{
      constructor(props){
        super(props)
        this.eventDispatcher = new NestedDispatchor(parentDispatcher, {
          autoEnable: false
        })
        this.eventDispatcher.on('*', function(type, payload){
          if(debug){
            console.log('event', type, payload)
          }
          store.dispatch({
            type,
            payload,
          })
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
