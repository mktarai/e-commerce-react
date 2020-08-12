import { TOGGLE_DRAWER } from '../@constants/action-types';

const initialState = {
    toggleDrawer: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return Object.assign({}, state, {
                toggleDrawer: action.payload
            });        
    }

    return state;
}

export default rootReducer;