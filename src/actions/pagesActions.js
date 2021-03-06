import {PAGES_LIST_REQUEST,PAGES_LIST_SUCCESS,PAGES_LIST_FAIL, PAGES_DETAILS_REQUEST, PAGES_DETAILS_SUCCESS, PAGES_DETAILS_FAIL, PAGES_DELETE_REQUEST, PAGES_DELETE_SUCCESS, PAGES_DELETE_FAIL,PAGES_CREATE_REQUEST,PAGES_CREATE_SUCCESS,PAGES_CREATE_FAIL, PAGES_UPDATE_REQUEST, PAGES_UPDATE_SUCCESS, PAGES_UPDATE_FAIL} from '../constants/pagesConstants'
import axios from 'axios'

//my actions mostly for dealing  create,delete,get and post of the api

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

export const createPage = () => async (dispatch) => {
    try{
        dispatch({type:PAGES_CREATE_REQUEST})

         const {data} = await axios.post(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages`,{

            title: "created website",
            description: "waiting for editing",
            type: 0,
            isActive: true,
            publishedOn: new Date()
         })            

        dispatch({
            type:PAGES_CREATE_SUCCESS,
            payload:data
            
        })
    }catch(error){
        dispatch({
            type:PAGES_CREATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updatePage = (page) => async (dispatch) => {
    try{
        dispatch({type:PAGES_UPDATE_REQUEST})

         const {data} = await axios.put(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${page.id}`,page)            

        dispatch({
            type:PAGES_UPDATE_SUCCESS,
            payload:data
            
        })
    }catch(error){
        dispatch({
            type:PAGES_UPDATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}