import React from 'react';

import {Alert} from 'react-bootstrap'
//i use this component to create a custom error message

const Message = ({variant, children}) => {
    return (
        <Alert variant = {variant}>
            {children}
        </Alert>
    );
}
 

Message.defaultProps = {
    variant: 'info'
}


export default Message;