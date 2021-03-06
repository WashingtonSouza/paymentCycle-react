const INITICAL_STATE = { list: [] }

export default (state = INITICAL_STATE, action) => {
  switch (action.type) {
    case 'BILLING_CYCLES_FETCHED':
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}