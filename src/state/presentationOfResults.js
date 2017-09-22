const SHOW = 'presentationOfResults/SHOW'

export const presentationOfResults () => ({
     type: SHOW
    })

const initialState = {
    chosenView: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                chosenView: state.chosenView
            }
        default:
            return state
    }
}