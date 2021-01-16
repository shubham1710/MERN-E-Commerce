import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from '../actions/types';

const initialState = {
    orders: [],
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }

        case CHECKOUT:
            return{
                ...state,
                orders: [action.payload, ...state.orders]
            }

        case ORDERS_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}