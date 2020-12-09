import {PAGES_LIST_REQUEST,PAGES_LIST_SUCCESS,PAGES_LIST_FAIL, PAGES_DETAILS_REQUEST, PAGES_DETAILS_SUCCESS, PAGES_DETAILS_FAIL, PAGES_DELETE_REQUEST, PAGES_DELETE_SUCCESS, PAGES_DELETE_FAIL} from '../constants/pagesConstants'
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


export const listPageDetails = (id) => async (dispatch) => {
    try{
        dispatch({type:PAGES_DETAILS_REQUEST})

        const { data } = await axios.get(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${id}`)

        dispatch({
            type:PAGES_DETAILS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:PAGES_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deletePage = (id) => async (dispatch) => {
    try{
        dispatch({type:PAGES_DELETE_REQUEST})

         await axios.delete(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${id}`)

        dispatch({
            type:PAGES_DELETE_SUCCESS,
            
        })
    }catch(error){
        dispatch({
            type:PAGES_DELETE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}