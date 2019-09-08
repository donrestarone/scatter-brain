const initialState = {
  timerId: null,
  facts: [],
  speed: 50
}

export const reducer = (state = initialState, action) => {
  let actionType = action.type
  let data = action.data
  switch(actionType) {
    case 'initTimer':
      return {
        ...state, 
        timerId: data
      }
    case 'addFact':
      return {
        ...state, 
        facts: [...state.facts, data]
      }
    case 'changeSpeed':
        return {
          ...state, 
          speed: data
        }
    default:
      return state
  }
}