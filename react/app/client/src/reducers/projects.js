const initialState = [
  'Fuck',
  'Fuck my mind'
]

export default function projects(state = initialState, action){
  if (action.type === 'ADD_PROJECT'){
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_PROJECT'){
    return state;
  }
  return state;
}