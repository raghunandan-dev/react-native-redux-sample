import { POP_ROUTE, PUSH_ROUTE,SUBMIT_FORM } from '../constants/ActionTypes'

export function push (route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: POP_ROUTE
  }
}
export function formSubmit (userName) {
  return {
    type: SUBMIT_FORM,
    userName
  }
}