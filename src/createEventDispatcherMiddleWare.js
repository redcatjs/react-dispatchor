export default function createEventDispatcherMiddleWare(eventDispatcher){
  return store => next => action => {
    const {
      type,
      payload,
      metas,
      _fromEventDispatcher
    } = action
    const result = next(action)
    if(!_fromEventDispatcher){
      eventDispatcher.emit(type, payload, metas, true)
    }
    return result
  }
}
