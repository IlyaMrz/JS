import { userActions } from './types'

const  INITAL_STATE = {
    countRedState: 90
}

const mathReducer = (state=INITAL_STATE, action) => {
    switch (action.type) {
        case userActions.INCREASE:
            return {
                ...state,
                countRedState: state.countRedState + 1
            }
        case userActions.DECREASE:
            return {
                countRedState: state.countRedState - 1
            }
        default: {
            return state
        }
    }
}

export default mathReducer;