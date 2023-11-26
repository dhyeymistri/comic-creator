import './Alert.css';
import React from 'react';

function Alert(props) {
    return (
        <div className='alert-container'>
        {props.alert && <div className={`${props.alert.type}`}>
            {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
