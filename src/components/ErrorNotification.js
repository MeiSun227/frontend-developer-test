
import React from 'react';
import Typography from '@material-ui/core/Typography';

const ErrorNotification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div className="error">
            <Typography color="secondary" align="center">{message}</Typography>
        </div>
    )
}

export default ErrorNotification