import React, { forwardRef } from 'react'
import './Message.css';
import { Card, CardContent, Typography } from '@material-ui/core';


const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={ isUser ? "message__user--card" : "message__guest--card" }>
                <CardContent>
                    <Typography
                    variant="h5"
                    component="h2">
                    {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
