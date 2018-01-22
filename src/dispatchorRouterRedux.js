import Dispatchor from 'dispatchor'

import {
  push,
  replace,
  go,
} from 'react-router-redux'

export default function({
  dispatchor = new Dispatchor(),
  navEventNames: {
    NAV_PUSH,
    NAV_REPLACE,
    NAV_GO,
    NAV_FORWARD,
    NAV_BACK,
  },
  store: {
    dispatch
  }
}){
  
  dispatchor.on(NAV_PUSH, URI=> dispatch(push(URI)))
  dispatchor.on(NAV_REPLACE, URI=> dispatch(replace(URI)))
  dispatchor.on(NAV_GO, NUMBER=> dispatch(go(NUMBER)))
  dispatchor.on(NAV_BACK, ()=> dispatch(go(-1)))
  dispatchor.on(NAV_FORWARD, ()=> dispatch(go(1)))
  
  return dispatchor
}
