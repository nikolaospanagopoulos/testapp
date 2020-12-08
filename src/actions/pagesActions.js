import {PAGES_LIST_REQUEST,PAGES_LIST_SUCCESS,PAGES_LIST_FAIL} from '../constants/pagesConstants'
import axios from 'axios'

export const listPages = () => async (dispatch) => {
    try{
        dispatch({type:PAGES_LIST_REQUEST})

        const { data } = await axios.get('https://pagesmanagement.azurewebsites.net/api/ResponsivePages')

        dispatch({
            type:PAGES_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:PAGES_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}