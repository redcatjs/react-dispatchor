import {
  put,
} from 'redux-saga/effects'
export default function emit(type, payload){
  return put({type, payload})
}
