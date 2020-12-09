import React from 'react';
import {Spinner} from 'react-bootstrap'
import './LoadingComponent.css'

//i create a styled loader using bootstrap

const Loader = () => {
    return (
        <Spinner animation = 'border' role = 'status' className='spinner'>
            <span className = 'sr-only'> Loading... </span>
        </Spinner>
    );
}
 
export default Loader;