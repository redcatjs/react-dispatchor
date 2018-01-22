export default function connectDispatcherToStore(dispatchor, store){
  dispatchor.on('*',function(type, payload, metas, _fromReduxDispatcher){
    // console.log('event', {type, payload, metas})
    if(!_fromReduxDispatcher){
      store.dispatch({
        type,
        payload,
        metas,
        _fromEventDispatcher: true,
      })
    }
  })
}
