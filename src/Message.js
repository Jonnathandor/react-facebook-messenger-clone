import React, { forwardRef } from 'react'
import './Message.css';
import { Card, CardContent, Typography } from '@material-ui/core';


function Message({ username, message }) {
    const isUser = username === message.username;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={ isUser ? "message__user--card" : "message__guest--card" }>
                <CardContent>
                    <Typography
                    variant="h5"
                    component="h2">
                    {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
